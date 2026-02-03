<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
     <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between">
        <div>
           <p class="text-gray-500 text-sm font-medium uppercase tracking-wider">Tổng Sản Phẩm</p>
           <h3 class="text-3xl font-bold text-slate-800 mt-2">{{ productCount }}</h3>
        </div>
        <div class="p-3 bg-blue-50 text-blue-600 rounded-full">
           <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
        </div>
     </div>

     <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between">
        <div>
           <p class="text-gray-500 text-sm font-medium uppercase tracking-wider">Tổng Bài Viết</p>
           <h3 class="text-3xl font-bold text-slate-800 mt-2">{{ newsCount }}</h3>
        </div>
        <div class="p-3 bg-orange-50 text-orange-600 rounded-full">
           <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
        </div>
     </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getProducts } from '@/data/products'
import { getNewsItems } from '@/data/news'

const productCount = ref(0)
const newsCount = ref(0)

onMounted(async () => {
   const products = await getProducts()
   productCount.value = products.length
   const news = await getNewsItems()
   newsCount.value = news.length
})
</script>
