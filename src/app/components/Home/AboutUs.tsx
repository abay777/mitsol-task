import React from "react";
import AboutUsBg from '@/app/assets/about-us-bg.jpeg'
import Image from "next/image";
import truck from '@/app/assets/about-us-truck.png'
import ChooseUs from "./ChooseUs";
const AboutUs = () => {
  return (
    <section className=" "   style={{
        backgroundImage: `url(${AboutUsBg.src})  `,backgroundRepeat:"no-repeat", height:"min-content"// use Next.js' image optimization
      }} >
        <section className="mt-[30rem] xl:mt-[35rem] px-0  flex xl:flex-row flex-col-reverse justify-center items-center" >
            <main className="xl:pl-20 px-6 flex-[89%]">
                <h1 className="xl:text-5xl md:text-3xl text-xl text-white font-extrabold">About <span className="text-[#D91E27]">us</span> </h1>
                <div className="mt-3">   
                    <p>       
                    <span className="xL:text-2xl md:text-xl text-lg font-bold inline"><span className="text-[#d91e27]">Apexloads.com </span>is a premier digital platform designed to revolutionize the logistics and transportation industry</span>
                    <span className="inline text-sm">, with a special focus on the African market. We aim to bridge the gap between shippers and truck owners, providing a seamless and efficient solution to manage freight loads. Our platform is built on the principles of innovation, reliability, and accessibility, ensuring that all users, regardless of their location, can optimize their logistics operations and drive their businesses forward.</span>
                    </p>  

                </div>
                <button className="border-2 rounded-2xl px-3 text-sm mt-3 md:block hidden">Know more</button>
            </main>
            <section className=" overflow-hidden relative flex-grow">
                <div className="relative " style={{zIndex:'10 !important'}}>
                <Image className="xl:ml-[10rem] max-w-[100rem] ml-[7rem] mr-0 w-[10rem] h-[10rem]  lg:w-[20rem]" style={{zIndex:'10'}} src={truck} width={100} layout="responsive" height={100} alt="truck"/>
                </div>
                <div className="absolute lg:-right-[3.7rem] lg:-top-[11rem] -right-[25rem] -top-[2rem]">      
                    <svg className="xl:w-[17rem] xl:h-[44rem] w-[50rem] h-[11rem] "  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 469 397" fill="none">
                        <path d="M0 397L1.76943e-05 232.066L270.577 0H469L0 397Z" fill="#D9D9D9"/>
                    </svg>
                </div>
                <div className="absolute xl:bottom-[5rem] xl:right-0 -bottom-[3.5rem] -right-[1rem] " style={{zIndex:''}}>
                <svg xmlns="http://www.w3.org/2000/svg" className='xl:w-[11rem] xl:h-[12rem] w-[7.5rem] h-[22rem]' viewBox="0 0 163 103" fill="none">
                    <path opacity="0.5" d="M162.5 102.5L54.5 0L0 46.5L60 102.5H162.5Z" fill="url(#paint0_linear_953_126)"/>
                    <defs>
                    <linearGradient id="paint0_linear_953_126" x1="42.75" y1="-137" x2="42.75" y2="102.5" gradientUnits="userSpaceOnUse">
                    <stop/>
                    <stop offset="1" stop-color="#FF0000"/>
                    </linearGradient>
                    </defs>
                </svg>
                </div>
            </section>
        </section>
        <ChooseUs/>
    </section>
  )
};

export default AboutUs;
