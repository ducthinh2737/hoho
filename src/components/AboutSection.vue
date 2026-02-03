<template>
  <section id="about" class="py-20 bg-white relative overflow-hidden">
    <!-- Decorative background -->
    <div class="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-32 z-0"></div>

    <div class="container mx-auto px-4 relative z-10">
      
      <!-- Info Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div v-for="(card, index) in infoCards" :key="index" class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
          <div class="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
            <component :is="card.icon" class="w-6 h-6" />
          </div>
          <h3 class="font-bold text-slate-800 text-lg mb-2">{{ card.title }}</h3>
          <p class="text-sm text-gray-500 mb-1" v-for="(line, i) in card.lines" :key="i">{{ line }}</p>
        </div>
      </div>

      <!-- Main Content Split -->
      <div class="flex flex-col lg:flex-row gap-16 items-center">
        
        <!-- Text Content -->
        <div class="w-full lg:w-1/2" data-aos="fade-right">
          <div class="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-bold tracking-wide mb-4">
            VỀ CHÚNG TÔI
          </div>
          <h2 class="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Áo Thun XuXu <br>
            <span class="text-gray-400 font-light">Trương Bảo Phát</span>
          </h2>
          <p class="text-gray-600 text-lg mb-8 leading-relaxed">
            Thành lập từ 2014, khởi nguồn từ thương hiệu Áo thun XuXu (2010), chúng tôi tự hào mang đến những giải pháp in ấn sáng tạo và chất lượng nhất cho doanh nghiệp của bạn.
          </p>

          <div class="space-y-4 mb-10">
            <div v-for="(item, index) in services" :key="index" class="flex gap-4 items-start group">
              <div class="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center mt-1 flex-shrink-0 group-hover:bg-cyan-600 transition-colors duration-300">
                <svg class="w-3 h-3 text-cyan-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
              </div>
              <p class="text-slate-700 font-medium group-hover:text-cyan-700 transition-colors">{{ item }}</p>
            </div>
          </div>

          <a href="#contact" class="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all hover:gap-3">
            Liên hệ hợp tác 
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>

        <!-- Image Gallery -->
        <div class="w-full lg:w-1/2" data-aos="fade-left">
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-4 mt-8">
              <img src="@/assets/dong-phuc-min.jpg" alt="Đồng phục" class="w-full aspect-[4/5] object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500">
            </div>
            <div class="space-y-4">
              <img src="@/assets/quang-cao-min.jpg" alt="Quảng cáo" class="w-full aspect-square object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500">
              <img src="@/assets/bao-bi-min.jpg" alt="Bao bì" class="w-full aspect-square object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500">
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ClockIcon, UserGroupIcon, PhoneIcon } from '@heroicons/vue/24/outline'

const infoCards = [
  {
    title: 'Thời gian làm việc',
    icon: ClockIcon,
    lines: ['Thứ 2 - Thứ 7', 'Sáng: 8:30 - 12:00', 'Chiều: 13:30 - 18:00']
  },
  {
    title: 'Tìm kiếm đối tác',
    icon: UserGroupIcon,
    lines: ['Hợp tác kinh doanh', 'Lĩnh vực in ấn & quà tặng', 'Cùng phát triển bền vững']
  },
  {
    title: 'Liên hệ nhanh',
    icon: PhoneIcon,
    lines: ['076.771.0030 (Kinh doanh)', '081.771.0030 (Kỹ thuật)', 'Hỗ trợ 24/7']
  }
]

const services = [
  "May, in, thêu đồng phục công ty, nhà hàng, sự kiện",
  "In ấn quảng cáo: Băng rôn, Standee, Poster, Tem nhãn",
  "Sản xuất bao bì, túi giấy, hộp quà tặng thương hiệu",
  "Quà tặng doanh nghiệp: Ly sứ, bình giữ nhiệt, kỷ niệm chương",
  "Dịch vụ khắc Laser chuyên nghiệp trên mọi chất liệu"
]
</script>
