import React from 'react'
import { TESTIMONIALS } from '../utils/Helper'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { NEXT_ARROW, PREV_ARROW } from '../utils/Icons';
function Testimonials() {
  return (
    <div className='max-w-[1248px] mx-auto'>
      <div className="container">
        <h3 className="text-5xl max-lg:text-[38px] max-md:text-3xl max-sm:text-2xl text-deepBlue text-center leading-[110%]">
          Our<span className="font-bold">Testimonials</span>
        </h3>
        <p className="opacity-90 max-w-[610px] mx-auto text-center text-gray-600 leading-[150%] mt-4">
          Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum
        </p>
      </div>
      <div className='container relative'>
        <Swiper 
         modules={[Navigation]}
         spaceBetween={10}
         slidesPerView={3}
         navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
         loop={true}>
          {TESTIMONIALS.map((item, index) => (
            <SwiperSlide>
              <div className='max-w-[364px] border-OffGrey border rounded-md p-5 shadow-[0px_0px_13.9px_0px_#0000001A]' key={index}>
                <div className='flex items-center gap-2'>
                  <img className='w-[60px]' src={item.icon} alt="" />
                  <div>
                    <p className='text-2xl'>{item.name}</p>
                    <a className='opacity-50' href="">{item.id}</a>
                  </div>
                </div>
                <img className='mt-6 mb-[18px] h-[18px]' src={item.stars} alt="green stars" />
                <p className='leading-[150%]'>{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev border border-black rounded-full hover:bg-black py-1 px-2 transition-all ease-linear duration-300">
        <PREV_ARROW/> 
      </div>
      <div className="swiper-button-next border border-black rounded-full hover:bg-black py-1 px-2 transition-all ease-linear duration-300">
        <NEXT_ARROW/>
      </div>
      </div>
    </div>
  )
}

export default Testimonials