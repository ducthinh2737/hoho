<template>
  <section id="contact" class="py-24 bg-slate-900 text-white relative overflow-hidden">
    <!-- Glow Effects -->
    <div class="absolute top-[20%] right-0 w-[500px] h-[500px] bg-cyan-900/40 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-blue-900/30 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="flex flex-col lg:flex-row gap-20">
        
        <!-- Info Column -->
        <div class="w-full lg:w-1/2" data-aos="fade-right">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">Liên hệ với chúng tôi</h2>
          <p class="text-gray-400 text-lg mb-10 leading-relaxed">
            Hãy để lại thông tin, đội ngũ tư vấn của XuXu sẽ liên hệ lại ngay để giải đáp mọi thắc mắc và báo giá tốt nhất cho bạn.
          </p>

          <div class="space-y-8">
             <div class="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition border border-white/5 hover:border-cyan-500/50">
               <div class="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-lg flex items-center justify-center shrink-0">
                 <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
               </div>
               <div>
                 <h3 class="font-bold text-lg">Địa chỉ</h3>
                 <p class="text-gray-400 mt-1">38/16 đường Đặng Đức Thuật, KP.6, P. Tam Hiệp, TP. Biên Hoà, Đồng Nai</p>
               </div>
             </div>

             <div class="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition border border-white/5 hover:border-cyan-500/50">
               <div class="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-lg flex items-center justify-center shrink-0">
                 <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
               </div>
               <div>
                 <h3 class="font-bold text-lg">Hotline / Zalo</h3>
                 <p class="text-cyan-400 font-mono text-xl font-bold mt-1 tracking-wider">076-771-0030</p>
               </div>
             </div>
          </div>

          <div class="mt-12">
            <h4 class="font-bold text-lg mb-4">Kết nối mạng xã hội</h4>
            <div class="flex gap-4">
              <a href="#" class="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:scale-110 transition shadow-lg shadow-blue-600/30">
                <span class="font-bold text-white">f</span>
              </a>
              <a href="#" class="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition shadow-lg shadow-red-600/30">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Form Column -->
        <div class="w-full lg:w-1/2" data-aos="fade-left">
          <form @submit.prevent="submitForm" class="bg-white p-8 md:p-10 rounded-3xl shadow-2xl text-gray-800">
            <h3 class="text-2xl font-bold mb-8 text-gray-900">Gửi yêu cầu tư vấn</h3>
            
            <div class="space-y-6">
              <div class="relative">
                <input v-model="form.name" type="text" placeholder="Họ và tên" required
                  class="w-full h-14 pl-4 pr-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all font-medium placeholder:text-gray-400"
                >
              </div>
              <div class="relative">
                <input v-model="form.phone" type="tel" placeholder="Số điện thoại" required
                  class="w-full h-14 pl-4 pr-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all font-medium placeholder:text-gray-400"
                >
              </div>
              <div class="relative">
                <textarea v-model="form.message" placeholder="Nội dung cần tư vấn..." rows="4"
                  class="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all font-medium placeholder:text-gray-400 resize-none"
                ></textarea>
              </div>

              <button type="submit" class="w-full h-14 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300">
                GỬI YÊU CẦU NGAY
              </button>
            </div>
          </form>
        </div>

      </div>

      <!-- Map -->
      <div class="mt-20 rounded-3xl overflow-hidden shadow-2xl h-[400px] border border-white/10" data-aos="fade-up">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7834.2306861373145!2d106.86136!3d10.954659!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174dd007163277b%3A0x18abe8063b563a2e!2zWHV4dSAtIMOBbyDEkeG7k25nIHBo4bulYywgaW4g4bqlbiB0ZW0gbmjDo24sIHF1w6AgdOG6t25n!5e0!3m2!1svi!2sus!4v1769151241323!5m2!1svi!2sus"
            class="w-full h-full border-0 grayscale hover:grayscale-0 transition duration-700"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  phone: '',
  message: ''
})

const submitForm = () => {
  alert(`Cảm ơn bạn ${form.name}! Form này chỉ mang tính chất minh họa.`)
  form.name = ''
  form.phone = ''
  form.message = ''
}
</script>
