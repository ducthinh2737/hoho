<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
    <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
            <label class="block text-sm font-medium text-gray-700">ID (Mã sản phẩm)</label>
            <input v-model="form.id" type="text" :disabled="isEdit" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-2 border" required>
        </div>
        <div>
             <label class="block text-sm font-medium text-gray-700">Danh mục</label>
             <select v-model="form.category" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-2 border" required>
                <option value="ads">Quảng cáo</option>
                <option value="bag">Túi xách</option>
                <option value="item">Mặt hàng</option>
                <option value="laser">Laser</option>
                <option value="uniform">Đồng phục</option>
             </select>
        </div>
        <div>
            <label class="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
            <input v-model="form.title" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-2 border" required>
        </div>
        <div>
            <label class="block text-sm font-medium text-gray-700">Mô tả ngắn</label>
            <textarea v-model="form.desc" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-2 border"></textarea>
        </div>
        <div>
            <label class="block text-sm font-medium text-gray-700">Hình ảnh (URL)</label>
            <input v-model="form.image" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-2 border">
        </div>
        <div>
             <label class="block text-sm font-medium text-gray-700">Chi tiết sản phẩm</label>
             <textarea v-model="form.detail" rows="5" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-2 border"></textarea>
        </div>
        
        <div class="flex justify-end gap-3 pt-4">
            <router-link to="/admin/products" class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Hủy</router-link>
            <button type="submit" class="px-4 py-2 bg-orange-500 border border-transparent rounded-md text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                {{ isEdit ? 'Cập nhật' : 'Thêm mới' }}
            </button>
        </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getProductById, createProduct, updateProduct } from '@/data/products'

const route = useRoute()
const router = useRouter()
const isEdit = computed(() => !!route.params.id)

const form = ref({
    id: '',
    title: '',
    category: 'ads',
    desc: '',
    image: '',
    detail: ''
})

onMounted(async () => {
    if (isEdit.value) {
        const product = await getProductById(route.params.id)
        if (product) {
            form.value = { ...product }
        }
    }
})

const handleSubmit = async () => {
    let success = false
    if (isEdit.value) {
        success = await updateProduct(form.value.id, form.value)
    } else {
        success = await createProduct(form.value)
    }

    if (success) {
        alert('Lưu thành công!')
        router.push('/admin/products')
    } else {
        alert('Có lỗi xảy ra!')
    }
}
</script>
