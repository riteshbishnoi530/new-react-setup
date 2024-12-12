import React from 'react'
import { REVIEW, UTILITIES } from '../../utils/Helper'
import { REVIEW_ARROW, STAR_ICON } from '../../utils/Icons'
import Heading from '../../common/Heading'

function Utilities() {
  return (
    <div className='px-4 pt-[162px] max-lg:pt-16 max-md:pt-12 max-sm:pt-10'>
      <div className='container'>
        <div className='text-center'>
      <Heading heading="Why Choose Us for" spanHeading="Utilities" />
      </div>
        <p className='opacity-90 mt-4 max-md:mt-2 max-lg:text-center max-w-[620px] mx-auto text-center'>This emphasizes both the action and the benefits, drawing in potential customers with a clear value proposition. Let me know if you'd like any adjustments!</p>
        <div className='flex max-xl:flex-col items-center gap-6 mt-14 max-lg:mt-12 max-md:mt-10 max-sm:mt-8'>
          <div className='bg-PrussianBlue max-w-[424px] max-xl:max-w-[692px] p-10 max-sm:p-5 rounded-md'>
            {REVIEW.map((item, index) => (
              <div key={index}>
                <STAR_ICON />
                <h3 className='text-white text-2xl leading-[110%] mt-7'>{item.heading}</h3>
                <p className='text-white leading-[150%] opacity-90 mt-3'>{item.description}</p>
                <div className='bg-white py-[22px] px-[26px] w-fit rounded-[446px] cursor-pointer mt-[22px]'>
                  <REVIEW_ARROW />
                </div>
              </div>
            ))}
          </div>
          <div className='max-w-[692px] flex flex-wrap justify-center gap-6'>
            {UTILITIES.map((item, index) => (
              <div className='max-w-[334px] min-h-[286px] max-h-[286px] p-6 border-OffGrey border rounded-md shadow-[0px_0px_13.9px_0px_#0000001A]' key={index}>
                <div>{item.icon}</div>
                <h3 className='text-2xl leading-[110%] mt-6'>{item.heading}</h3>
                <p className='leading-[150%] opacity-90 mt-3'>{item.description}</p>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Utilities