'use client'
import Image from "next/image";
import React from "react";
import logo from '@/app/assets/logo.png'
const Footer = () => {
  return (
    <footer className="bg-[#171715] px-5">
        <section className="pt-6">
            <Image src={logo} width={200} height={200} className="-ml-4" alt="logo"/>
            <div className="text-start ">
                <p  className="text-[#8F9FA3] text-[.9rem]">The first free end-to-end analytics service for the site, designed to work with enterprises of various levels and business segment</p>
            </div>
            <div className="pt-5">
                <h5 className="text-[#BF5540] text-base">Feedback</h5>
                <p className="text-[#FFFFFF66] pt-4 text-xl">Seeking personalized support? </p>
                <p className="#FFFFFF text-xl"> Request a call from our team</p>
            </div>
             <div>
                <div className=" md:w-[40%] ">
                    <label htmlFor="name" className=" text-[#FFFFFF66] text-[.7rem] w-full border-[1px] py-2 mt-4  px-4 rounded-xl border-[#FFFFFF99] flex flex-col">
                        YOUR NAME
                     <input type="text " id="name" className="text-white text-[1rem]  max-h-min bg-[#171715] focus:border-none focus:outline-none" />
                    </label>
                    <label htmlFor="name" className=" text-[#FFFFFF66] text-[.7rem] w-full border-[1px] py-2 mt-4  px-4 rounded-xl border-[#FFFFFF99] flex flex-col">
                      PHONE NUMBER
                     <input type="text " id="name" className="text-white text-[1rem]  max-h-min bg-[#171715] focus:border-none focus:outline-none" />
                    </label>
                    <button className=" mt-5 rounded-2xl bg-[#D91E27] px-8 py-[4px] text-[.8rem]"> Send a request</button>
                </div>
             </div>
        </section>
        <section className="pt-6 flex md:justify-center md:items-center">
            <div className="flex-1">
                <h5 className="text-[#D91E27]">Useful Links</h5>
                <div  className="flex flex-col mt-2 text-[.9rem] ">
                    <p className="text-[#CAC9C4] ">About Us</p>
                    <p className="text-[#CAC9C4] ">Privacy Policy</p>
                    <p className="text-[#CAC9C4] ">Contact Us</p>
                    <p className="text-[#CAC9C4] ">Newsletter</p>
                    <p className="text-[#CAC9C4] ">Pricing</p>
                    <p className="text-[#CAC9C4] ">Our Blog</p>
                    <p className="text-[#CAC9C4] ">FAQsEAC</p>
                    <p className="text-[#CAC9C4] ">Profile</p>
                </div>
                <div className="mt-5">
                    <h6 className="text-[.7rem] text-[#72716D] ">CONTACT US</h6>
                    <div className="text-[#FFFFFF] text-[.9rem] mt-3 ">
                        <p  className="py-1">+254 (0) 709 677 400</p>
                        <p  className="py-1">info@apexloads.com</p>
                        <p  className="text-[#CAC9C4]  w-[12rem] py-1">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                    </div>
                    <h5 className="text-[#D81E27] py-1">Call me back</h5>
                </div>
                <div className="mt-5">
                    <h6 className="text-[#72716D] text-[.7rem]">FOLLOW US</h6>
                    <div className="flex flex-col gap-1 mt-5">
                        <a href="" className="text-[#CAC9C4] text-[.8rem]" >Telegram</a>
                        <a href="" className="text-[#CAC9C4] text-[.8rem]">Whatsapp</a>
                        <a href="" className="text-[#CAC9C4] text-[.8rem]">Instagram</a>
                    </div>
                </div>
               
            </div>
            {/* services */}
            <div className="md:flex-1">
                <h5 className="text-[#D91E27]">Services</h5>
                <div className="mt-2">
                    <h5 className="text-[#FFFFFF]  font-bold">Transporters</h5>
                    <div className="mt-2 text-[#DCDCDC] text-[.9rem]">
                        <p>Post Trucks</p>
                        <p>Search For Loads</p>
                    </div>
                </div>
                <div className="mt-5">
                    <h5 className="text-[#FFFFFF]  font-bold">Shippers</h5>
                    <div className="mt-2 text-[#DCDCDC] text-[.9rem]">
                        <p>Post Trucks</p>
                        <p>Search For Loads</p>
                    </div>
                </div>
                <div className="mt-5">
                    <h5 className="text-[#FFFFFF]  font-bold">Brokers / Freight-Forwarders</h5>
                    <div className="mt-2 text-[#DCDCDC] text-[.9rem]">
                        <p>Post Trucks</p>
                        <p>Search For Loads</p>
                    </div>
                </div>
                <div className="mt-5">
                    <h5 className="text-[#FFFFFF]  font-bold">Full-Service Brokers</h5>
                    <div className="mt-2 text-[#DCDCDC] text-[.9rem]">
                        <p>Post Trucks/ Loads</p>
                        <p>Search Trucks/ Loads</p>
                    </div>
                </div>
                <div className=" pt-5 flex justify-center "  onClick={()=>window.scrollTo({
                    top: 0,
                    behavior:'smooth'
                })}>
                    <div className="flex justify-center items-center rounded-full border w-full p-[1.5rem] max-w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="text-center  bi bi-arrow-up w-[2rem] h-[2rem] font-semibold" viewBox="0 0 16 16" stroke="currentColor" stroke-width=".5">
                    <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
                    </svg>
                    </div>

                </div>
               
            </div>

            {/* last */}

        </section>
            <div className="flex w-full justify-between mt-8 pb-4">
                <p className="text-[#72716D] text-[.7rem]">© 2024 — Copyright</p>
                <p className="text-[#72716D] text-[.7rem]">Privacy</p>
            </div>

    </footer>
  )
};

export default Footer;
