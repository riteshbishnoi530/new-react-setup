import React from 'react'
import CustomButton from '../../common/CustomButton'
import Hero from './Hero'
import { Arrow } from '../../utils/Icons'
function Header() {
  return (
    <div className='px-5 bg-hero-image bg-bottom bg-cover bg-no-repeat'>
      <div className="container">
        <Hero/>
        <div className='flex max-lg:gap-10 max-lg:flex-col relative pt-[109px] pb-[202px] max-xl:pb-44 max-lg:py-14 max-md:py-12 max-sm:pt-10 max-sm:pb-12'>
          <div className='flex flex-col justify-between mt-3'>
            <div>
              <h1 className='max-w-[530px] max-lg:text-center max-lg:max-w-[690px] max-lg:text-5xl max-sm:text-3xl max-lg:mx-auto text-CustomSm max-xl:text-6xl leading-[110%] text-white'>Easily Compare <span className='font-bold'>Energy, Gas, And Internet</span> Plans</h1>
              <p className='max-w-[506px] max-lg:text-center max-lg:mx-auto text-white leading-[150%] mt-4 max-sm:mt-3'>Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place.</p>
              <div className='flex max-lg:justify-center'>
                <div className='flex bg-white max-w-[476px] w-full rounded-[100px] rounded-bl-[60px] rounded-tl-none p-2 pl-[14px] border-[#00000033] border mt-[42px] max-lg:mt-8 max-sm:mt-6'>
                  <form className='flex justify-between w-full'>
                  <input required className='outline-none w-full pr-3' type="text" placeholder='Start typing your address' />
                 <CustomButton customButton="Compare" buttonSpan={<Arrow/>}/>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='max-w-[558px] max-xl:max-w-[450px] max-lg:mx-auto max-lg:max-w-[500px] lg:absolute right-0 -bottom-[140px] max-xl:-bottom-8'>
            <img className='max-w-[112px] absolute -right-16 max-xl:-right-4 -top-9 max-lg:hidden' src="./assets/webp/header-image-layer.webp" alt="layer" />
            <img className='relative z-[1]' src="./assets/webp/women-work.webp" alt="women" />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Header