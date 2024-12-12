import React from 'react'
import { TESTIMONIALS } from '../../utils/Helper'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { NEXT_ARROW, PREV_ARROW } from '../../utils/Icons';
import Heading from '../../common/Heading';
function Testimonials() {
  return (
    <div className='max-w-[1248px] pt-[168px] max-lg:pt-16 max-md:pt-12 max-sm:pt-10 relative mx-auto'>
      <div className="container">
      <Heading heading="Our" spanHeading="Testimonials" />
        <p className="opacity-90 max-w-[610px] mx-auto text-center text-gray-600 leading-[150%] mt-4">
          Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum
        </p>
        <div className='relative mt-16 max-lg:mt-12 max-md:mt-10 max-sm:mt-6 px-16'>
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={3}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              
              0: { 
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            loop={true}>
            {TESTIMONIALS.map((item, index) => (
              <SwiperSlide key={index}>
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
            <PREV_ARROW />
          </div>
          <div className="swiper-button-next border border-black rounded-full hover:bg-black py-1 px-2 transition-all ease-linear duration-300">
            <NEXT_ARROW />
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Testimonials