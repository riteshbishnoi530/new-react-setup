import React from 'react'
import { SWITCHING_ENERGY } from '../../utils/Helper'
import { Arrow } from '../../utils/Icons'
import CustomButton from '../../common/CustomButton'
import Heading from '../../common/Heading'

function SwitchingEnergy() {
  return (
    <div className='px-4 pb-[162px] max-lg:pb-14 max-md:pb-12 max-sm:pb-10'>
      <div className="container flex max-lg:flex-col-reverse justify-between gap-10 lg:items-center">
        <div className='max-w-[507px] max-lg:mx-auto'>
          <img src="./assets/webp/switching-energy.webp" alt="" />
        </div>
        <div className='max-w-[558px] max-lg:max-w-full max-lg:flex flex-col max-lg:items-center'>
          <div className='max-w-[409px]'>
            <Heading boldHeading="Switching Energy" heading=" Made Simple" />
          </div>
          <p className='opacity-90 mt-4 max-md:mt-2 max-lg:text-center max-lg:max-w-[600px] mx-auto'>Say goodbye to confusing energy plans! We simplify the process by providing clear and competitive electricity and gas recommendations. Whether you're moving or just seeking a better deal, our platform connects you with the best energy providers quickly and easily, helping you save on energy bills.</p>
          <h5 className='text-2xl max-sm:text-xl lg:text-start text-PrussianBlue mt-[38px] max-lg:mt-7 max-md:mt-4 mb-7 max-md:mb-3'>Benefits of Comparing Energy Plans</h5>
          <ul className='flex flex-col gap-2 ml-4 items-start'>
            {SWITCHING_ENERGY.map((obj, i) => (
              <li key={i} className='list-disc'>{obj.list}</li>
            ))}
          </ul>
          <div className='pt-5'>
            <CustomButton customButton="Compare With Us" buttonSpan={<Arrow />} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SwitchingEnergy