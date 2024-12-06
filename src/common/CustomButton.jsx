import React from 'react'
import { Arrow } from '../utils/icons'

function CustomButton() {
  return (        
        <button className='text-base font-bold bg-sky-500 flex py-3 px-5 text-white rounded-[50px] rounded-tl-none rounded-bl-[20px]'>Compare<Arrow/></button>
  )
}

export default CustomButton