<template>
  <section class="py-24 bg-slate-50 overflow-hidden">
    <div class="container mx-auto px-4">
      
      <div class="text-center max-w-3xl mx-auto mb-20 relative z-40" data-aos="fade-up">
        <h2 class="text-sm font-bold tracking-widest text-cyan-600 uppercase mb-3">Dịch vụ nổi bật</h2>
        <h3 class="text-3xl md:text-5xl font-bold text-slate-900">In Quảng Cáo & Gia Công</h3>
        <div class="w-24 h-1 bg-cyan-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <div v-if="products.length > 0" class="flex flex-col lg:flex-row-reverse items-center gap-16 relative">


        <!-- Left Column: Product List (Visually Right) -->
        <div class="w-full lg:w-1/2 space-y-8 mt-12 lg:mt-0">
          <div class="space-y-6">
            <div 
              v-for="(product, index) in products" 
              :key="index" 
              @mouseenter="activeIndex = index"
              class="group relative pl-8 py-4 cursor-pointer transition-all duration-300"
              data-aos="fade-left"
              :data-aos-delay="index * 100"
            >
              <!-- Indicator Line -->
              <div 
                class="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 rounded-full"
                :class="activeIndex === index ? 'bg-cyan-500' : 'bg-gray-200 group-hover:bg-cyan-200'"
              ></div>

              <h4 
                class="text-xl font-bold mb-2 transition-colors uppercase"
                :class="activeIndex === index ? 'text-cyan-700' : 'text-slate-700'"
              >
                {{ product.title }}
              </h4>
              <p class="text-slate-500 text-sm leading-relaxed whitespace-pre-line line-clamp-2">{{ product.desc }}</p>
              
              <!-- Link to detail -->
              <router-link :to="'/san-pham/' + product.id" class="text-xs text-cyan-600 font-semibold hover:underline mt-2 block opacity-0 group-hover:opacity-100 transition-opacity">Xem chi tiết &rarr;</router-link>
            </div>
          </div>

          <div class="pt-8 pl-8 flex flex-wrap gap-4">
            <router-link :to="'/san-pham/' + products[activeIndex].id" class="inline-flex items-center px-6 py-3 bg-cyan-700 text-white font-semibold rounded shadow hover:bg-cyan-800 transition">
              Xem chi tiết <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </router-link>
            
             <router-link 
               to="/danh-muc/ads"
               class="inline-flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded shadow-sm hover:shadow-md transition text-slate-700 font-semibold group"
             >
               <span>Xem tất cả danh mục</span>
               <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
             </router-link>
          </div>
        </div>

        <div class="w-full lg:w-1/2" data-aos="fade-right">
          <div class="relative h-[900px] rounded-[1rem] overflow-hidden shadow-2xl bg-gray-100">
             <!-- Circular Decor -->
             <div class="absolute -top-20 -left-20 w-64 h-64 bg-cyan-100 rounded-full blur-3xl z-0"></div>
             
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


<script setup>
import { ref, onMounted } from 'vue';
import { getProductsByCategory } from '@/data/products';

const activeIndex = ref(0);
const products = ref([]);

onMounted(async () => {
  products.value = await getProductsByCategory('ads');
});
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
