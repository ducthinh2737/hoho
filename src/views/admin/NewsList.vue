<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
    <div class="p-6 border-b border-gray-100 flex justify-between items-center">
       <h3 class="text-lg font-bold text-slate-800">Danh sách Tin tức</h3>
       <router-link to="/admin/news/create" class="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm font-medium">
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
                  <th class="p-3 border-b text-sm font-semibold">Tiêu đề</th>
                  <th class="p-3 border-b text-sm font-semibold">Ngày đăng</th>
                  <th class="p-3 border-b text-sm font-semibold">Danh mục</th>
                  <th class="p-3 border-b text-sm font-semibold text-right">Hành động</th>
               </tr>
            </thead>
            <tbody>
               <tr v-for="item in news" :key="item.id" class="hover:bg-gray-50">
                  <td class="p-3 border-b text-sm text-gray-600">{{ item.id }}</td>
                  <td class="p-3 border-b text-sm font-medium text-slate-800">{{ item.title }}</td>
                  <td class="p-3 border-b text-sm text-gray-600">{{ item.date }}</td>
                  <td class="p-3 border-b text-sm text-gray-600 uppercase">{{ item.category }}</td>
                  <td class="p-3 border-b text-right space-x-2">
                     <router-link :to="`/admin/news/edit/${item.id}`" class="text-blue-600 hover:text-blue-800 text-sm font-medium">Sửa</router-link>
                     <button @click="handleDelete(item.id)" class="text-red-500 hover:text-red-700 text-sm font-medium">Xóa</button>
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
import { getNewsItems, deleteNewsItem } from '@/data/news'

const news = ref([])
const loading = ref(true)

const fetchNews = async () => {
    loading.value = true
    news.value = await getNewsItems()
    loading.value = false
}

const handleDelete = async (id) => {
    if (confirm('Bạn có chắc chắn muốn xóa bài viết này?')) {
        const success = await deleteNewsItem(id)
        if (success) {
            await fetchNews()
        } else {
            alert('Xóa thất bại!')
        }
    }
}

onMounted(fetchNews)
</script>
