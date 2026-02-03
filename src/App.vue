<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Navbar />
  <div class="pt-16 md:pt-0">
    <router-view></router-view>
  </div>
  <Footer />
</template>
