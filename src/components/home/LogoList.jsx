import React from 'react'
function LogoList() {
  return (
    <div className='px-4'>
      <div className="container pt-14 pb-40 max-lg:pb-28 max-md:pb-20 max-sm:py-10">
        <h3 className='max-w-[548px] max-lg:text-center max-lg:mx-auto text-CustomMd max-md:text-3xl max-sm:text-2xl text-PrussianBlue leading-[110%]'>More than <span className='font-bold text-sky-400'>80,000+</span> companies trust bill central </h3>
        <div className='logo flex overflow-x-auto gap-[51px] max-sm:gap-8 mt-16 max-lg:mt-12 max-md:mt-8'>
          <img className='max-h-[62px]' src="./assets/webp/first-energy.webp" alt="first-energy" />
          <img className='max-h-[62px]' src="./assets/webp/blue-nrg.webp" alt="blue-nrg"/>
          <img className='max-h-[62px]' src="./assets/webp/dodo.webp" alt="dodo"/>
          <img className='max-h-[62px]' src="./assets/webp/origin.webp" alt="origin"/>
          <img className='max-h-[62px]' src="./assets/webp/ovo.webp" alt="ovo"/>
          <img className='max-h-[62px]' src="./assets/webp/sumo.webp" alt="sumo"/>
          <img className='max-h-[62px]' src="./assets/webp/agl.webp" alt="agl"/>
        </div>
      </div>
    </div>
  )
}

export default LogoList