<template>
  <div class="bg-white min-h-screen pt-24 pb-16">
    <div class="container mx-auto px-4">
      <div v-if="article" class="max-w-4xl mx-auto">
        <!-- Breadcrumb -->
        <nav class="flex items-center text-sm text-gray-500 mb-8">
          <router-link to="/" class="hover:text-orange-500 transition">Trang chủ</router-link>
          <span class="mx-2">/</span>
          <span class="text-orange-500 font-medium">Tin tức</span>
        </nav>

        <!-- Article Header -->
        <div class="mb-12 text-center" data-aos="fade-up">
           <span class="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
             {{ article.category }}
           </span>
           <h1 class="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
             {{ article.title }}
           </h1>
           <div class="flex items-center justify-center gap-6 text-gray-500 text-sm">
             <div class="flex items-center gap-2">
               <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
               {{ article.date }}
             </div>
             <div class="flex items-center gap-2">
               <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
               {{ article.author }}
             </div>
           </div>
        </div>

        <!-- Featured Image -->
        <div class="rounded-3xl overflow-hidden shadow-2xl mb-12 aspect-[21/9]" data-aos="zoom-in">
          <img :src="article.image" :alt="article.title" class="w-full h-full object-cover">
        </div>

        <!-- content -->
        <div class="prose prose-lg prose-slate mx-auto max-w-none px-4 md:px-0" v-html="article.content"></div>
        
        <!-- Navigation -->
        <div class="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
           <router-link to="/" class="flex items-center gap-2 text-slate-600 hover:text-orange-600 transition font-medium">
             <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
             Quay lại trang chủ
           </router-link>
           <button class="px-6 py-2 bg-orange-500 text-white rounded-full shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition">
             Chia sẻ bài viết
           </button>
        </div>

      </div>
      
      <!-- Not Found State -->
      <div v-else class="text-center py-32">
        <h2 class="text-2xl font-bold text-gray-400">Không tìm thấy bài viết</h2>
        <router-link to="/" class="text-orange-500 hover:underline mt-4 inline-block">Về trang chủ</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getNewsById } from '@/data/news'

const route = useRoute()
const article = ref(null)

const fetchArticle = async () => {
  article.value = await getNewsById(route.params.id)
}

onMounted(fetchArticle)

watch(() => route.params.id, fetchArticle)
</script>
