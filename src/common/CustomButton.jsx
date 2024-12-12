import React from 'react'
import { Arrow } from '../utils/Icons'

function CustomButton({customButton , buttonSpan}) {
  return (        
        <button className='text-base font-bold bg-sky-500 flex py-3 px-[22px] text-white rounded-[50px] rounded-tl-none hover:scale-90 duration-300 ease-linear gap-1'>{customButton} <span>{buttonSpan}</span></button>
  )
}

export default CustomButton