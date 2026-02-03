<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-slate-900 text-white flex flex-col">
      <div class="p-6 text-2xl font-bold text-orange-500 border-b border-slate-800">
        Admin Panel
      </div>
      <nav class="flex-1 p-4 space-y-2">
        <router-link to="/admin" exact-active-class="bg-slate-800 text-orange-500" class="block py-2.5 px-4 rounded transition hover:bg-slate-800 hover:text-orange-400">
          Dashboard
        </router-link>
        <router-link to="/admin/products" active-class="bg-slate-800 text-orange-500" class="block py-2.5 px-4 rounded transition hover:bg-slate-800 hover:text-orange-400">
          Quản lý Sản phẩm
        </router-link>
        <router-link to="/admin/news" active-class="bg-slate-800 text-orange-500" class="block py-2.5 px-4 rounded transition hover:bg-slate-800 hover:text-orange-400">
          Quản lý Tin tức
        </router-link>
      </nav>
      <div class="p-4 border-t border-slate-800">
        <router-link to="/" class="block py-2 px-4 text-center border border-slate-700 rounded hover:bg-slate-800 transition text-sm">
          Về trang chủ
        </router-link>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 overflow-y-auto">
      <header class="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h2 class="text-xl font-semibold text-slate-800">
           {{ $route.meta.title || 'Dashboard' }}
        </h2>
        <div class="flex items-center gap-4">
           <span class="text-sm font-medium text-slate-600">Admin User</span>
           <div class="w-8 h-8 bg-orange-500 rounded-full"></div>
        </div>
      </header>
      <div class="p-6">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script setup>
</script>
