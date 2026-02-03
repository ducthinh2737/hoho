<template>
  <section class="py-24 bg-white" id="blog">
    <div class="container mx-auto px-4">
      
      <!-- Section Header -->
      <div class="text-center mb-20 relative z-40" data-aos="fade-up">
        <h2 class="text-sm font-bold tracking-widest text-orange-500 uppercase mb-3">Tin tức & Sự kiện</h2>
        <h3 class="text-3xl md:text-5xl font-bold text-slate-900">Bài Viết Mới Nhất</h3>
        <p class="mt-4 text-gray-500 max-w-2xl mx-auto">Cập nhật xu hướng thời trang, công nghệ in ấn và các hoạt động của Áo Thun XuXu.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(item, index) in newsItems" 
          :key="index"
          class="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <!-- Image -->
          <div class="aspect-[16/9] overflow-hidden relative">
            <img 
              :src="item.image" 
              :alt="item.title"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              {{ item.date }}
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <div class="text-xs font-bold text-orange-500 mb-2 uppercase tracking-wider">{{ item.category }}</div>
            <h4 class="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
              <router-link :to="'/tin-tuc/' + item.id">{{ item.title }}</router-link>
            </h4>
            <p class="text-gray-500 text-sm mb-4 line-clamp-3 leading-relaxed">
              {{ item.desc }}
            </p>
            <router-link :to="'/tin-tuc/' + item.id" class="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors group/link">
              Đọc tiếp 
              <svg class="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </router-link>
          </div>
        </div>
      </div>

      <!-- See More Button -->
      <!-- <div class="mt-12 text-center">
        <a href="#" class="inline-flex items-center gap-2 px-8 py-3 bg-slate-50 border border-slate-200 text-slate-700 font-semibold rounded-full hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-all">
          Xem tất cả bài viết
        </a>
      </div> -->

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getNewsItems } from '@/data/news'

const newsItems = ref([])

onMounted(async () => {
  newsItems.value = await getNewsItems()
})
</script>

