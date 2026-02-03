<template>
  <section id="home" class="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-slate-50">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-cyan-200/30 rounded-full blur-[100px] mix-blend-multiply animate-blob"></div>
      <div class="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-200/30 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-4000"></div>
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
    </div>

    <div class="container mx-auto px-4 pt-16 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        <!-- Text Content -->
        <div class="flex-1 text-center lg:text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-6 animate-fade-in-up">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span class="text-xs font-semibold text-slate-600 tracking-wide uppercase">Dịch vụ in ấn chuyên nghiệp</span>
          </div>

          <h1 class="text-4xl md:text-6xl lg:text-4xl font-bold leading-tight text-slate-900 mb-6" data-aos="fade-up" data-aos-delay="100">
            Chúng tôi cung cấp dịch vụ in ấn <br class="hidden md:block" />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Đẳng cấp & Tinh tế</span>
          </h1>

          <p class="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Áo Thun XuXu mang đến giải pháp in ấn toàn diện, từ đồng phục doanh nghiệp đến quà tặng cá nhân hóa, với chất lượng vượt trội và thiết kế sáng tạo.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="300">
            <a href="#services" class="group relative px-8 py-3.5 bg-slate-900 text-white font-semibold rounded-full shadow-xl shadow-slate-900/20 hover:shadow-slate-900/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <span class="relative z-10">Khám phá Dịch vụ</span>
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a href="https://www.youtube.com/@aothunxuxubienhoa" target="_blank" class="group px-8 py-3.5 bg-white text-slate-700 font-semibold rounded-full border border-gray-200 shadow-lg hover:border-cyan-200 hover:text-cyan-700 hover:shadow-cyan-100 transition-all duration-300 flex items-center justify-center gap-2">
               <svg class="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
               Xem Video
            </a>
          </div>
        </div>

        <!-- Image/Visual -->
        <div class="flex-1 w-full max-w-[600px] lg:max-w-none relative" data-aos="fade-left" data-aos-delay="400">
            <div class="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 bg-white/30 backdrop-blur-sm border border-white/50 p-4">
                 <img 
                    src="https://shop.aothunxuxu.com/assets/img/may-in-theu-ao-dong-phuc-bien-hoa-dong-nai-min.png" 
                    alt="Printing Machinery" 
                    class="w-full h-auto rounded-xl transform transition hover:scale-[1.02] duration-500"
                />
            </div>
            
            <!-- Floating Cards Elements (Decor) -->
            
            <div class="absolute -bottom-5 -left-5 w-auto px-4 py-2 bg-white rounded-xl shadow-xl flex items-center gap-2 animate-pulse z-20 hidden md:flex">
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                <span class="text-sm font-bold text-slate-700">Online 24/7</span>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
