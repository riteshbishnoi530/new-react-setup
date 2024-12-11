import React from 'react';
import { SWITCH_STEPS } from '../../utils/Helper';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SwitchSteps() {
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 890,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="px-4">
                <h3 className="text-5xl max-lg:text-[38px] max-md:text-3xl max-sm:text-2xl text-deepBlue text-center leading-[110%]">
                    Simple Steps to <span className="font-bold">Switch</span>
                </h3>
                <p className="opacity-90 max-w-[610px] mx-auto text-center text-gray-600 leading-[150%] mt-4">
                    Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum
                </p>
            </div>
            <div className="w-full flex justify-center max-xl:hidden mt-[58px]">
            {SWITCH_STEPS.map((item, index) => (
                        <div className='relative max-w-[360px] max-sm:max-w-[300px] group cursor-pointer overflow-hidden' key={index}>

                            <img src={item.stepsImage} alt={item.alt} />
                            <div className='absolute group-hover:h-0 group-hover:w-0 group-hover:top-1/2 group-hover:left-1/2 group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] group-hover:opacity-100 group-hover:z-10 transition-all duration-300 bg-link-white opacity-94 top-0 left-0 w-full h-full'>
                                <div className='relative w-full h-full'>
                                    <img className='pointer-events-none group-hover:hidden' src={item.imageContent} alt="" />
                                </div>
                            </div>
                            <div className='bg-PrussianBlue absolute bottom-[-50%] group-hover:bottom-0 transition-all duration-300 w-full max-w-[360px] p-8 '>
                                <h4 className=' text-CustomLg font-normal mb-3.5 text-white'>{item.hoverHeading}</h4>
                                <p className='leading-custom-ssm font-normal text-white'>{item.hoverContent}</p>
                            </div>

                        </div>
                    ))}
            </div>
            <div className="w-full xl:hidden overflow-hidden mt-[58px]">
                <Slider {...settings}>
                    {SWITCH_STEPS.map((item, index) => (
                        <div className="relative w-[360px] max-sm:w-[300px] group cursor-pointer overflow-hidden" key={index}>
                            <img src={item.stepsImage} alt={item.alt} />
                            <div className="absolute group-hover:h-0 group-hover:w-0 group-hover:top-1/2 group-hover:left-1/2 group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] group-hover:opacity-100 group-hover:z-10 transition-all duration-300 bg-link-white opacity-94 top-0 left-0 w-full h-full">
                                <div className="relative w-full h-full">
                                    <img className="pointer-events-none group-hover:hidden" src={item.imageContent} alt="img" />
                                </div>
                            </div>
                            <div className="bg-PrussianBlue absolute bottom-[-50%] group-hover:bottom-0 transition-all duration-300 w-full p-8 ">
                                <h4 className="text-CustomLg font-normal mb-3.5 text-white">{item.hoverHeading}</h4>
                                <p className="leading-custom-ssm font-normal text-white">{item.hoverContent}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default SwitchSteps;
