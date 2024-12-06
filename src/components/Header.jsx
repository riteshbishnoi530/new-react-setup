import React from 'react'
import CustomButton from '../common/CustomButton'
import women from '../assets/webp/women-work.webp'
import headerBg from '../assets/webp/header-bg.webp'
import Hero from './Hero'
function Header() {
  return (
    <div className='px-5' style={{
      backgroundImage: `url(${headerBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'bottom',
      width: '100%',
    }}>
      <div className="container">
        <Hero/>
        <div className='flex max-lg:gap-10 max-lg:flex-col relative pt-[109px] pb-[202px] max-xl:pb-44 max-lg:py-14 max-md:py-12 max-sm:py-10'>
          <div className='flex flex-col justify-between mt-3'>
            <div>
              <h1 className='max-w-[510px] max-lg:text-center max-lg:max-w-[690px] max-md:text-5xl max-sm:text-3xl max-lg:mx-auto text-CustomSm leading-[110%] text-white'>Easily Compare <span className='font-bold'>Energy, Gas, And Internet</span> Plans</h1>
              <p className='max-w-[506px] max-lg:text-center max-lg:mx-auto text-white leading-[150%] mt-4 max-sm:mt-3'>Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place.</p>
              <div className='flex max-lg:justify-center'>
                <div className='flex bg-white max-w-[467px] justify-between w-full rounded-[100px] rounded-bl-[20px] rounded-tl-none p-2 pl-[14px] border-[#00000033] border mt-[42px] max-md:mt-8 max-sm:mt-6'>
                  <input className='outline-none w-full pr-3' type="text" placeholder='Start typing your address' />
                  <CustomButton />
                </div>
              </div>
            </div>
          </div>
          <div className='max-w-[558px] max-xl:max-w-[450px] max-lg:mx-auto max-lg:max-w-[500px] lg:absolute right-0 -bottom-40 max-xl:-bottom-8'>
            <img className='' src={women} alt="women" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header