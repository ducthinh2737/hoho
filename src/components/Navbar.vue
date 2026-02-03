<template>
  <nav 
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-gray-200/50 backdrop-blur-xl bg-white/80 supports-[backdrop-filter]:bg-white/60"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 md:h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3 group">
          <div class="relative overflow-hidden rounded-lg shadow-sm border border-gray-100 transition-transform duration-300 group-hover:scale-105">
            <img src="@/assets/logo.jpg" alt="Xuxu Logo" class="h-10 w-auto md:h-12 object-cover">
          </div>
          <span class="font-bold text-lg md:text-xl tracking-tight bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Áo Thun XuXu
          </span>
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
          <a    
            v-for="item in menuItems" 
            :key="item.name"
            :href="item.href"
            class="text-sm font-medium text-gray-600 hover:text-cyan-600 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            {{ item.name }}
          </a>
          
          <a 
            href="#contact" 
            class="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            Liên Hệ Ngay
          </a>
        </div>

        <!-- Mobile Button -->
        <button 
          @click="isOpen = !isOpen"
          class="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors focus:outline-none"
        >
          <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div v-if="isOpen" class="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl">
        <div class="px-4 py-3 space-y-1">
          <a
            v-for="item in menuItems"
            :key="item.name"
            :href="item.href"
            @click="isOpen = false"
            class="block px-3 py-2 rounded-lg text-base font-medium text-gray-600 hover:text-cyan-600 hover:bg-gray-50 transition-colors"
          >
            {{ item.name }}
          </a>
          <div class="pt-4 pb-2">
            <a 
              href="#contact" 
              class="block w-full text-center px-5 py-3 text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-md"
              @click="isOpen = false"
            >
              Liên Hệ Ngay
            </a>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const menuItems = [
  { name: 'Trang chủ', href: '#' },
  { name: 'Giới thiệu', href: '#about' },
  { name: 'Dịch vụ', href: '#services' },
  { name: 'Sản phẩm', href: '#services' },
  { name: 'Tin tức', href: '#blog' },
  { name: 'FAQ', href: '#faq' },
]
</script>
