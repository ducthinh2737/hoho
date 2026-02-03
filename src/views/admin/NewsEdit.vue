<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
    <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
            <label class="block text-sm font-medium text-gray-700">Tiêu đề</label>
            <input v-model="form.title" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-2 border" required>
        </div>
        <div>
             <label class="block text-sm font-medium text-gray-700">Danh mục</label>
             <input v-model="form.category" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-2 border" required>
        </div>
        <div>
            <label class="block text-sm font-medium text-gray-700">Ngày đăng</label>
            <input v-model="form.date" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-2 border">
        </div>
         <div>
            <label class="block text-sm font-medium text-gray-700">Tác giả</label>
            <input v-model="form.author" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-2 border">
        </div>
        <div>
            <label class="block text-sm font-medium text-gray-700">Mô tả ngắn</label>
            <textarea v-model="form.desc" rows="2" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-2 border"></textarea>
        </div>
        <div>
            <label class="block text-sm font-medium text-gray-700">Hình ảnh (URL)</label>
            <input v-model="form.image" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-2 border">
        </div>
        <div>
             <label class="block text-sm font-medium text-gray-700">Nội dung bài viết</label>
             <textarea v-model="form.content" rows="6" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-2 border"></textarea>
        </div>
        
        <div class="flex justify-end gap-3 pt-4">
            <router-link to="/admin/news" class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Hủy</router-link>
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
import { getNewsById, createNewsItem, updateNewsItem } from '@/data/news'

const route = useRoute()
const router = useRouter()
const isEdit = computed(() => !!route.params.id)

const form = ref({
    title: '',
    category: 'Tin tức',
    date: new Date().toLocaleDateString('vi-VN'),
    author: 'Admin',
    desc: '',
    image: '',
    content: ''
})

onMounted(async () => {
    if (isEdit.value) {
        const news = await getNewsById(route.params.id)
        if (news) {
            form.value = { ...news }
        }
    }
})

const handleSubmit = async () => {
    let success = false
    if (isEdit.value) {
        success = await updateNewsItem(route.params.id, form.value)
    } else {
        success = await createNewsItem(form.value)
    }

    if (success) {
        alert('Lưu thành công!')
        router.push('/admin/news')
    } else {
        alert('Có lỗi xảy ra!')
    }
}
</script>
