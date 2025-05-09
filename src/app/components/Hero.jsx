'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function HeroSlider() {
  const slides = [
    { image: '/img1.jpg' },
    { image: '/img2.jpg' },
    { image: '/img3.jpg' },
    { image: '/img4.jpg' },
    { image: '/img11.jpg' },
    { image: '/img6.jpg' },
    { image: '/img7.jpg' },
    { image: '/img8.jpg' },
    { image: '/img9.jpg' },
    { image: '/img10.jpg' },
    { image: '/img18.jpg' },
    { image: '/img17.jpg' },
    { image: '/img16.jpg' },
    { image: '/img13.jpg' },
    { image: '/img15.jpg' },
  ]

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Slider */}
      <div className="w-full h-[300px] sm:h-[400px] md:h-[600px] relative">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000 }}
          loop
          pagination={{ clickable: true }}
          navigation
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  filter: 'brightness(1.05) contrast(1.05)',
                }}
              >
                <div className="absolute inset-0 bg-black/30" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Contact Banner */}
      <div className="w-full bg-[#f8486c] py-10 text-center px-6 flex flex-col items-center gap-6">
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white w-full text-center">
          For admissions, connect with us at{' '}
          <span className="font-extrabold">+91 7304-071-071</span>
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          <a
            href="tel:+917304071071"
            className="bg-white text-[#f8486c] font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition"
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/917304071071"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-green-600 transition"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
