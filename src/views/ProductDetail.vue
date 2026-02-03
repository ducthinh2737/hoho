<template>
  <div class="py-24 bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4">
      
      <!-- Back Link -->
      <router-link to="/" class="inline-flex items-center text-gray-500 hover:text-cyan-600 mb-8 transition">
        <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
        Quay lại trang chủ
      </router-link>

      <div v-if="product" class="space-y-16">
        
        <!-- Category Hero Info -->
       

        <!-- Child Products Grid -->
        <div>
          <h2 class="text-2xl md:text-3xl font-bold text-slate-800 mb-8 border-l-8 border-cyan-500 pl-4 uppercase">
             Mẫu {{ product.title }}
          </h2>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             <div 
               v-for="(child, index) in childProducts" 
               :key="index"
               class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100"
             >
                <div class="aspect-square bg-gray-100 relative overflow-hidden">
                   <!-- Fallback Image Logic or Reuse Product Image with tweaks -->
                   <img 
                      :src="product.image" 
                      class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      :style="{ filter: `hue-rotate(${index * 45}deg)` }" 
                   /> 
                   <!-- Using hue-rotate to simulate variations for dummy data -->
                   
                   <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span class="text-white font-bold border-2 border-white px-4 py-2 rounded-full">Xem chi tiết</span>
                   </div>
                </div>
                <div class="p-6">
                   <h3 class="font-bold text-slate-700 mb-2 group-hover:text-cyan-600 transition">{{ product.title }} - Mẫu {{ index + 1 }}</h3>
                   <p class="text-sm text-gray-500">Mã: {{ product.id }}-0{{ index + 1 }}</p>
                </div>
             </div>
          </div>
        </div>

      </div>
      
      <div v-else class="text-center py-20">
        <h2 class="text-2xl font-bold text-gray-400">Danh mục không tồn tại</h2>
        <router-link to="/" class="text-cyan-600 mt-4 inline-block hover:underline">Về trang chủ</router-link>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getProductById } from '@/data/products'

const route = useRoute()
const product = ref(null)

const fetchProduct = async () => {
  product.value = await getProductById(route.params.id)
}

onMounted(fetchProduct)

watch(() => route.params.id, fetchProduct)


// Generate dummy child products based on the category
const childProducts = ref(Array.from({ length: 8 }, (_, i) => ({ id: i })))
</script>
