import React, { useEffect, useState } from 'react'
import {NAV_LIST } from '../utils/helper';
import {BlackArrow} from '../utils/icons'
const Hero = () => {
    const [open, setOpen] = useState(false);
    const toggleSidebar = () => setOpen(!open);
    const closeNavbar = () => {
        setOpen(false);
    };
    useEffect(() => {
        const handleOverflow = () => {
            if (open && window.innerWidth < 1024) {
                document.body.classList.add("overflow-hidden");
            } else {
                document.body.classList.remove("overflow-hidden");
            }
        };
        handleOverflow();
        window.addEventListener("resize", handleOverflow);
        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [open]);
    return (
        <div className='pt-4 overflow-hidden min-[1921px]:max-w-[1920px] mx-auto'>
            <div className='container flex justify-between items-center'>
                <div className='relative z-20'>
                     <a href="#" className='text-[#FF002A] text-4xl font-godzilla font-normal'><img className='max-w-[105px] max-lg:max-w-[80px]' src="../assets/webp/logo.webp" alt="logo" /></a> 
                </div>
                <div className={`flex gap-10 max-lg:gap-6 max-lg:flex-col max-lg:justify-center max-lg:items-center ${open ? 'max-lg:z-10 max-lg:translate-x-0 max-lg:bg-black max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:h-full max-lg:w-full max-lg:bg-opacity-95 max-lg:transition-opacity duration-500 ease-linear blur-[70%] justify-center items-center' : 'max-lg:-left-full max-lg:hidden duration-500 ease-linear'}`}>
                    {NAV_LIST.map((obj, i) => (
                        <div key={i}>
                            <ul>
                                <li className='flex gap-1 flex-row justify-center items-center pb-0.5'>
                                    <a onClick={closeNavbar} href={obj.id} className=' text-base font-normal text-shadow transition-all ease-linear duration-300 text-white'>{obj.name}</a>
                                </li>
                            </ul>
                        </div>
                    ))}
                    <button className='lg:hidden text-base font-bold rounded-full rounded-tl-none bg-white py-3 px-5 flex items-center text-deepBlue hover:scale-90 duration-300 ease-linear gap-1'>Get Started <BlackArrow/></button>
                </div>
                <div>
                    <button className='max-lg:hidden text-base font-bold rounded-full rounded-tl-none bg-white py-3 px-5 flex items-center text-deepBlue hover:scale-90 duration-300 ease-linear gap-1'>Get Started <BlackArrow/></button>
                </div>
                <div onClick={toggleSidebar} className='z-[15] flex-col gap-1 lg:hidden flex'>
                    <span className={`${open ? 'w-8 h-1 bg-white rotate-45 translate-y-3 duration-300 ease-linear rounded' : 'w-8 h-1 bg-white duration-300 ease-linear rounded'}`}></span>
                    <span className={`${open ? 'w-8 h-1 bg-white  opacity-0 duration-700 ease-linear' : 'w-8 h-1 bg-white duration-700 ease-linear rounded'}`}></span>
                    <span className={`${open ? 'w-8 h-1 bg-white -rotate-45 -translate-y-1 duration-300 ease-linear rounded' : 'w-8 h-1 bg-white duration-300 ease-linear rounded'}`}></span>
                </div>
            </div>
        </div>
    )
}

export default Hero