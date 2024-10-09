import Image from "next/image";
import React from "react";
import driver from '@/app/assets/aboutus-driver.png';

const ChooseUs = () => {
  return (
    <section className="flex xl:flex-row flex-col justify-center  xl:px-20 px-8 mt-14 gap-16 box-border pb-[8rem] overflow-hidden">
        <div className="xl:w-[40%] w-full">
           <h1 className="text-3xl font-extrabold px-8 mb-6 ml-10 z-1 relative block xl:hidden text-center text-nowrap" >Why Choose <span className="text-[#D91E27]">Us</span></h1>
            <Image src={driver} className="xl:w-[26rem] xl:h-[33rem] w-[100%] xl:mx-0 h-[26rem] xl:object-cover rounded-md" width={200} height={200}alt="dirver"/>
        </div>
        <div className="xl:w-[60%] w-full flex-col justify-center items-center relative z-10">
            <div className="absolute -z-12 ml-[20rem] mt-[4rem] overflow-x-hidden">
                <svg width="602" height="602" viewBox="0 0 602 602" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.4" cx="301" cy="301" r="299.5" stroke="#D91E27" stroke-width="3"/>
                </svg>

            </div>
            <h1 className="text-[4rem] font-extrabold px-8 mb-6 ml-10 z-1 relative xl:block hidden" >Why Choose <span className="text-[#D91E27]">Us</span></h1>
            <section className="flex items-stretch gap-16">
                <div className="relative xl:block hidden">
                    <hr className="bg-[#FFFFFF]  h-[120%] w-[1px]"/>
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 w-[1rem] h-[1rem] bg-red-700 rounded-full"></span>

                </div>
                <section className="flex flex-col gap-10 ">
                <main className="bg-[#D91E27] text-white px-4 xl:w-[35rem] w-full choiceCard relative py-1">
                    <h3 className="font-bold mt-2 text-xl "> &#8226; Proven Track Record of Excellence</h3>
                    <p className="text-base py-4">At Apex Loads, we pride ourselves on our proven track record of excellence in the logistics industry. With years of experience and a deep understanding of Africa’s unique logistical challenges, we have established ourselves as a trusted partner for businesses across the continent.</p>

                </main>
                <main className="bg-[#D91E27] text-white px-4 xl:w-[35rem] w-full choiceCard relative py-1 cCard ">
                 
                    <h3 className="font-bold mt-2 text-xl "> &#8226; Comprehensive Solutions Tailored to Your Needs</h3>
                    <p className="text-base py-4">We offer comprehensive logistics solutions tailored to meet the specific needs of cargo owners, brokers, and shippers. Whether you are looking to optimize your supply chain, streamline operations, or enhance visibility and control, Apex Loads has the expertise and technology to deliver results.</p>

                </main>
                
                </section>
            </section>
        </div>
        
    </section>
  )};

export default ChooseUs;
