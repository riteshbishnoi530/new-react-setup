import React from 'react'
import { Arrow } from '../utils/icons'

function CustomButton() {
  return (        
        <button className='text-base font-bold bg-sky-500 flex py-3 px-[22px] text-white rounded-[50px] rounded-tl-none hover:scale-90 duration-300 ease-linear'>Compare<Arrow/></button>
  )
}

export default CustomButton