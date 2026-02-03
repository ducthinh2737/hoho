<script setup>
import { ref, onMounted } from 'vue'
import { getProductsByCategory } from '@/data/products'

const products = ref([])
const activeIndex = ref(0)

onMounted(async () => {
  products.value = await getProductsByCategory('laser')
})
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease-out;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>

<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto px-4 relative">
      <!-- Section Header -->
      <div class="text-center mb-20 relative z-40" data-aos="fade-up">
        <h2 class="text-sm font-bold tracking-widest text-orange-500 uppercase mb-3">Khắc Laser & Quà Tặng</h2>
        <h3 class="text-3xl md:text-5xl font-bold text-slate-900">Khắc Laser Cá Nhân Hóa</h3>
        <p class="mt-4 text-gray-500 max-w-2xl mx-auto">Công nghệ khắc Laser UV/CO2 hiện đại trên mọi chất liệu: Gỗ, Kim loại, Da, Trái cây...</p>
      </div>

      <div v-if="products.length > 0" class="flex flex-col lg:flex-row-reverse gap-16 items-center relative mb-12">
        
        <!-- Interactive List (Right) -->
        <div class="w-full lg:w-1/2 pt-12 lg:pt-0" data-aos="fade-left">
          <div class="space-y-6">
            <div 
              v-for="(product, index) in products" 
              :key="product.id"
              @mouseenter="activeIndex = index"
              class="group relative pl-8 py-4 cursor-pointer transition-all duration-300"
            >
              <!-- Indicator Line -->
              <div 
                class="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 rounded-full"
                :class="activeIndex === index ? 'bg-orange-500' : 'bg-gray-200 group-hover:bg-orange-200'"
              ></div>

              <h4 
                class="text-xl font-bold mb-2 transition-colors"
                :class="activeIndex === index ? 'text-orange-600' : 'text-slate-700'"
              >
                {{ product.title }}
              </h4>
              <p class="text-slate-500 text-sm leading-relaxed whitespace-pre-line">{{ product.desc }}</p>
              
              <!-- Link to detail -->
              <router-link :to="'/san-pham/' + product.id" class="text-xs text-orange-500 font-semibold hover:underline mt-2 block opacity-0 group-hover:opacity-100 transition-opacity">Xem chi tiết &rarr;</router-link>
            </div>
          </div>

          <div class="mt-10 pl-8 flex flex-wrap gap-4">
            <a href="#contact" class="inline-flex items-center gap-2 text-white bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold transition-all shadow-lg shadow-orange-500/30">
              Nhận Báo Giá Ngay <span class="text-xl">→</span>
            </a>

            <router-link 
              to="/danh-muc/laser"
              class="inline-flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition text-slate-700 font-semibold group"
            >
              <span>Xem tất cả danh mục</span>
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </router-link>
          </div>
        </div>

        <!-- Image Display (Left) -->
        <div class="w-full lg:w-1/2" data-aos="fade-right">
          <div class="relative h-[900px] rounded-[1rem] overflow-hidden shadow-2xl bg-gray-100">
             <!-- Circular Decor -->
             <div class="absolute -top-20 -left-20 w-64 h-64 bg-orange-100 rounded-full blur-3xl z-0"></div>
             
             <transition-group name="slide-up">
               <img 
                 v-for="(product, index) in products" 
                 :key="product.image"
                 v-show="activeIndex === index"
                 :src="product.image" 
                 :alt="product.title"
                 class="absolute inset-0 w-full h-full object-cover z-10"
               />
             </transition-group>

             <!-- Info Tag -->
             <div class="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg transform transition-transform hover:scale-105">
                <p class="text-xs font-bold text-gray-500 uppercase mb-1">Đang xem mẫu</p>
                <p class="text-lg font-bold text-slate-800">{{ products[activeIndex].title }}</p>
             </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>


