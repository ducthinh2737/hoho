<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
    <div class="p-6 border-b border-gray-100 flex justify-between items-center">
       <h3 class="text-lg font-bold text-slate-800">Danh sách Sản phẩm</h3>
       <router-link to="/admin/products/create" class="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm font-medium">
         + Thêm mới
       </router-link>
    </div>
    
    <div class="p-6">
       <div v-if="loading" class="text-center py-4 text-gray-500">Loading...</div>
       <div v-else class="overflow-x-auto">
         <table class="w-full text-left border-collapse">
            <thead>
               <tr class="bg-gray-50 text-slate-700">
                  <th class="p-3 border-b text-sm font-semibold">ID</th>
                  <th class="p-3 border-b text-sm font-semibold">Image</th>
                  <th class="p-3 border-b text-sm font-semibold">Tên sản phẩm</th>
                  <th class="p-3 border-b text-sm font-semibold">Danh mục</th>
                  <th class="p-3 border-b text-sm font-semibold text-right">Hành động</th>
               </tr>
            </thead>
            <tbody>
               <tr v-for="product in products" :key="product.id" class="hover:bg-gray-50">
                  <td class="p-3 border-b text-sm text-gray-600">{{ product.id }}</td>
                  <td class="p-3 border-b">
                     <img :src="product.image" class="w-12 h-12 object-cover rounded border" alt="">
                  </td>
                  <td class="p-3 border-b text-sm font-medium text-slate-800">{{ product.title }}</td>
                  <td class="p-3 border-b text-sm text-gray-600 uppercase">{{ product.category }}</td>
                  <td class="p-3 border-b text-right space-x-2">
                     <router-link :to="`/admin/products/edit/${product.id}`" class="text-blue-600 hover:text-blue-800 text-sm font-medium">Sửa</router-link>
                     <button @click="handleDelete(product.id)" class="text-red-500 hover:text-red-700 text-sm font-medium">Xóa</button>
                  </td>
               </tr>
            </tbody>
         </table>
       </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getProducts, deleteProduct } from '@/data/products'

const products = ref([])
const loading = ref(true)

const fetchProducts = async () => {
    loading.value = true
    products.value = await getProducts()
    loading.value = false
}

const handleDelete = async (id) => {
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
        const success = await deleteProduct(id)
        if (success) {
            await fetchProducts()
        } else {
            alert('Xóa thất bại!')
        }
    }
}

onMounted(fetchProducts)
</script>
