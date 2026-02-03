<template>
  <footer class="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div class="col-span-1 md:col-span-2">
          <router-link to="/" class="flex items-center gap-2 mb-4">
             <span class="text-2xl font-bold text-white">Áo Thun XuXu</span>
          </router-link>
          <p class="text-sm leading-relaxed max-w-xs mb-6">
            Đơn vị tiên phong trong lĩnh vực in ấn áo thun đồng phục và quà tặng doanh nghiệp tại Biên Hòa - Đồng Nai.
          </p>
          <div class="flex gap-4">
            <!-- Social Icons placeholder -->
          </div>
        </div>

        <div>
           <h4 class="text-white font-bold mb-4">Dịch vụ</h4>
           <ul class="space-y-2 text-sm">
             <li><a href="#" class="hover:text-cyan-500 transition">May đồng phục</a></li>
             <li><a href="#" class="hover:text-cyan-500 transition">In lụa, in nhiệt</a></li>
             <li><a href="#" class="hover:text-cyan-500 transition">Khắc Laser</a></li>
             <li><a href="#" class="hover:text-cyan-500 transition">Quà tặng</a></li>
           </ul>
        </div>

        <div>
           <h4 class="text-white font-bold mb-4">Hỗ trợ</h4>
           <ul class="space-y-2 text-sm">
             <li><a href="#" class="hover:text-cyan-500 transition">Báo giá</a></li>
             <li><a href="#" class="hover:text-cyan-500 transition">Quy trình đặt hàng</a></li>
             <li><a href="#" class="hover:text-cyan-500 transition">Chính sách đổi trả</a></li>
             <li><a href="#" class="hover:text-cyan-500 transition">Liên hệ</a></li>
           </ul>
        </div>
      </div>

      <div class="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>&copy; 2026 CTY TNHH MTV TRƯƠNG BẢO PHÁT. All rights reserved.</p>
        <p class="mt-2 md:mt-0"></p>
      </div>
    </div>
  </footer>
</template>
