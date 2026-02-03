<template>
  <div class="py-24 bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4">
      
      <!-- Back Link -->
      <router-link to="/" class="inline-flex items-center text-gray-500 hover:text-cyan-600 mb-8 transition">
        <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
        Quay lại trang chủ
      </router-link>

      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-sm font-bold tracking-widest text-cyan-600 uppercase mb-3">Danh Mục</h2>
        <h1 class="text-3xl md:text-5xl font-bold text-slate-900">{{ categoryTitle }}</h1>
        <div class="w-24 h-1 bg-cyan-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <div v-if="categories.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <router-link 
          v-for="(item, index) in categories" 
          :key="item.id"
          :to="'/san-pham/' + item.id"
          class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <!-- Image -->
          <div class="aspect-[4/3] overflow-hidden relative">
            <img 
              :src="item.image" 
              :alt="item.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span class="bg-white/90 text-slate-900 px-6 py-2 rounded-full font-bold text-sm transform scale-90 group-hover:scale-100 transition-all">
                Xem sản phẩm
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-8 flex-1 flex flex-col">
            <h3 class="text-xl font-bold text-slate-800 mb-3 group-hover:text-cyan-600 transition-colors">
              {{ item.title }}
            </h3>
            <p class="text-gray-500 mb-6 flex-1 line-clamp-3 leading-relaxed">
              {{ item.desc }}
            </p>
            <div class="flex items-center text-cyan-600 font-bold text-sm group-hover:translate-x-2 transition-transform">
              Khám phá ngay &rarr;
            </div>
          </div>
        </router-link>
      </div>

      <div v-else class="text-center py-20">
        <h3 class="text-xl text-gray-400">Không tìm thấy danh mục nào.</h3>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getProductsByCategory } from '@/data/products'

const route = useRoute()
const type = computed(() => route.params.type)

const categoryTitle = computed(() => {
  switch(type.value) {
    case 'ads': return 'In Quảng Cáo & Gia Công'
    case 'uniform': return 'May - In - Thêu Đồng Phục'
    case 'bag': return 'Bao Bì & Túi Giấy'
    case 'laser': return 'Khắc Laser & Quà Tặng'
    default: return 'Danh Mục Sản Phẩm'
  }
})

const categories = ref([])

const fetchProducts = async () => {
  categories.value = await getProductsByCategory(type.value)
}

onMounted(fetchProducts)

watch(type, fetchProducts)

</script>
