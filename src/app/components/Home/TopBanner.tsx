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
      <div className="relative z-10">
        <Image src={baseWhitex} className="absolute mt-[3rem]" width={180} height={50} alt="xs" />
        <Image src={topx} className="absolute z-10 mt-[2rem]" width={180} height={50} alt="xs" />
        <Image src={shortx} className="absolute z-10 mt-[9.5rem] ml-[.4rem]" width={110} height={50} alt="xs" />

        {/* Text on top */}
        <div className="absolute z-20">
          <p className="font-bold text-[4rem] mt-[50%] text-center ml-[30%] text-white">PRICING</p>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
