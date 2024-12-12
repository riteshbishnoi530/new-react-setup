import React from 'react'

function Heading({boldHeading,heading, spanHeading}) {
  return (
    <h3 className='text-5xl max-lg:text-[38px] leading-[110%] max-md:text-3xl max-sm:text-2xl text-deepBlue max-lg:max-w-full max-lg:text-center'><span className='font-bold'>{boldHeading}</span>{heading}<span className='font-bold'>{spanHeading}</span></h3>

  )
}

export default Heading