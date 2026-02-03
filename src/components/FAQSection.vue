<template>
  <section id="faq" class="py-24 bg-white relative">
    <div class="container mx-auto px-4 max-w-4xl">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Câu Hỏi Thường Gặp</h2>
        <p class="text-gray-500">Giải đáp những thắc mắc phổ biến về dịch vụ của Áo Thun XuXu</p>
      </div>

      <div class="space-y-4">
        <div 
          v-for="(item, index) in faqs" 
          :key="index" 
          class="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg bg-slate-50 hover:bg-white"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <button 
            @click="toggle(index)" 
            class="w-full flex justify-between items-center p-6 text-left focus:outline-none"
          >
            <span class="font-bold text-lg text-slate-700" :class="{ 'text-cyan-600': activeIndex === index }">{{ item.question }}</span>
            <span 
              class="flex-shrink-0 ml-4 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 transition-transform duration-300"
              :class="{ 'rotate-180 bg-cyan-600 border-cyan-600 text-white': activeIndex === index }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          
          <div 
             class="transition-all duration-300 ease-in-out overflow-hidden"
             :style="{ maxHeight: activeIndex === index ? '200px' : '0' }"
          >
             <div class="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100/50 mt-2">
               {{ item.answer }}
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const activeIndex = ref(0); // Open first one by default

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const faqs = [
  { question: 'Tôi có thể in số lượng ít (1 cái) không?', answer: 'Có. Chúng tôi nhận in lẻ từ 1 cái với công nghệ in kỹ thuật số và in decal. Tuy nhiên, giá thành sẽ cao hơn so với in số lượng lớn.' },
  { question: 'Thời gian in ấn mất bao lâu?', answer: 'Với đơn hàng số lượng ít, bạn có thể lấy ngay trong ngày. Đơn hàng số lượng lớn từ 3-5 ngày làm việc tùy vào độ phức tạp.' },
  { question: 'Shop có hỗ trợ thiết kế không?', answer: 'Chúng tôi hỗ trợ chỉnh sửa cơ bản miễn phí. Nếu cần thiết kế logo mới hoặc vẽ lại mẫu phức tạp, phí sẽ được tính riêng.' },
  { question: 'Chất liệu áo thun là gì?', answer: 'Chúng tôi cung cấp đa dạng chất liệu: Cotton 100% 2 chiều/4 chiều, vải Cá sấu Poly, Cá sấu 65/35, vải mè thể thao thoáng mát.' },
  { question: 'Tôi ở tỉnh xa có đặt hàng được không?', answer: 'Được. Chúng tôi nhận ship COD toàn quốc qua các đơn vị vận chuyển uy tín (GHTK, Viettel Post). Khách hàng được kiểm tra hàng trước khi thanh toán.' },
  { question: 'Chế độ bảo hành hình in như thế nào?', answer: 'Bảo hành hình in 6 tháng không bong tróc, nứt gãy với điều kiện giặt đúng quy cách (không dùng thuốc tẩy mạnh, không ủi trực tiếp lên hình in).' },
];
</script>
