import React from "react";
import Image from "next/image";
import banner from '@/app/assets/banner.png';
import baseWhitex from '@/app/assets/Vector 10.png';
import topx from '@/app/assets/Vector 9.png';
import shortx from '@/app/assets/Vector 8.png';

const TopBanner = () => {
  return (
    <div className="topbanner relative">
      {/* Background Image Container */}
      <div
        className="absolute topbannerImage inset-0 bg-cover bg-center filter brightness-80 w-full"
        style={{
          backgroundImage: `url(${banner.src})`, // use Next.js' image optimization
        }}
      ></div>

      {/* Overlay Elements */}
      <div className="relative  ">
      <div className="absolute  top-[90px]">
        <svg xmlns="http://www.w3.org/2000/svg"  className='xl:w-[19rem] xl:h-[19rem] w-[12rem] h-[12rem]' viewBox="0 0 405 343" fill="none">
          <path d="M0.555664 343L0.555679 200.5L233.889 0H405L0.555664 343Z" fill="#D9D9D9"/>
        </svg>
      </div>
       
        <div className="absolute   top-[50px]" >
          <svg xmlns="http://www.w3.org/2000/svg" className='xl:w-[19rem] xl:h-[19rem] w-[12rem] h-[12rem]' viewBox="0 0 371 371" fill="none">
            <path opacity="0.5" d="M371 371L0 0V158.779L212.221 371H371Z" fill="url(#paint0_linear_953_128)"/>
            <defs>
            <linearGradient id="paint0_linear_953_128" x1="185.5" y1="0" x2="185.5" y2="371" gradientUnits="userSpaceOnUse">
            <stop/>
            <stop offset="1" stop-color="#FF0000"/>
            </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute  xl:top-[300px] top-[205px] xl:left-[25px] left-[25px]">
          <svg xmlns="http://www.w3.org/2000/svg" className='xl:w-[10rem] xl:h-[10rem] w-[8rem] h-[8rem]' viewBox="0 0 163 103" fill="none">
            <path opacity="0.5" d="M162.5 102.5L54.5 0L0 46.5L60 102.5H162.5Z" fill="url(#paint0_linear_953_126)"/>
            <defs>
            <linearGradient id="paint0_linear_953_126" x1="42.75" y1="-137" x2="42.75" y2="102.5" gradientUnits="userSpaceOnUse">
            <stop/>
            <stop offset="1" stop-color="#FF0000"/>
            </linearGradient>
            </defs>
          </svg>
        </div>
  
  

        {/* Text on top */}
        <div className="absolute z-20 md:left-1/3 left-8 xl:left-[20rem] top-[8rem]">
          <div className="flex flex-col xl:items-end items-start">
            <p className="xl:text-[7rem] md:text-[4rem] text-[3rem]  font-extrabold xl:leading-[6rem] leading-[4rem] text-start uppercase">Reliable <br /> Transport</p>
            <div className="flex flex-col justify-center items-end mt-3 xl:ml-8">
              <p className="uppercase xl:text-5xl text-3xl  font-bold">Solutions for <br /> Your Freight</p>
              <p className="border-2 self-start mt-3  w-max px-2 rounded-2xl 
               text-center text-base font-bold ">
                BOOK YOUR FREE TRIAL 	<span className="">&rarr;</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
