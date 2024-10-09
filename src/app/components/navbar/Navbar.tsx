'use client'
import React, { useState } from "react";
import logo from '@/app/assets/logo.png';
import Image from "next/image";


const TopRedNav:React.FC = () =>  {
  return (
    <nav className="text-[#FFFFFF] hidden xl:block ">
      {/* topred navbar */}
      <div className="bg-[#D91E27] flex items-center justify-around text-[.9rem]  py-2">
        <section className="flex gap-4 ">
          <p className="flex items-center gap-1 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[1rem] h-[1rem]" fill="white">
              <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path>
            </svg>
            <span>+254 (0) 709 677 400</span>  
          </p >
          <p className="flex items-center gap-1 ">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[1rem] h-[1rem]" viewBox="0 0 24 24" id="phone" fill="white">
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"></path>
            </svg>
            <span>+254 (0) 709 677 400</span>
          </p>
          <p className="flex items-center gap-1 ">
          <svg xmlns="http://www.w3.org/2000/svg"   fill="currentColor" className="w-[1rem] h-[1rem] bi bi-envelope-fill" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
          </svg>
            <span> info@apexloads.com</span>
          </p>
        </section>
        {/* right part of red nav */}
        <section className="flex gap-14 items-center  ">
          <section className="flex gap-4 ">  
            <div className="relative group">
              <span className="absolute -right-[10px] bottom-[4px]">
                <svg className="w-[.4rem] h-[.4rem]"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 7 5" fill="none">
                <path d="M0.444336 1L3.44434 4L6.44434 1" stroke="white" stroke-width="0.5"/>
                </svg>
              </span>
              
                products
                <ul className="bg-[#D91E27] absolute w-[150px] py-4 pb-6 pl-2 hidden group-hover:block">
                  <li  value=""></li>
                  <li  value="">Search Loads</li>
                  <li  value="">Post a Truck</li>
                  <li  value="">EAC Profile</li>
                </ul>
           

            </div>
            <p>About Us</p>
            <div className="relative">
              <span className="absolute -right-[10px] bottom-[4px]">
                <svg className="w-[.4rem] h-[.4rem]"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 7 5" fill="none">
                <path d="M0.444336 1L3.44434 4L6.44434 1" stroke="white" stroke-width="0.5"/>
                </svg>
              </span>
              <p>Resources</p>

            </div>
          </section>
         <button className="bg-white text-[#D91E27] rounded-lg px-4 flex items-center font-semibold text-[.8rem] gap-[2px]">
          <span>Login</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[.65rem] h-[.65rem] " viewBox="0 0 7 5" fill="currentcolor">
          <path d="M0.444336 1L3.44434 4L6.44434 1" stroke="white" stroke-width="0.5"/>
          </svg> 
        </button>

        </section>


      </div>
    </nav>
  )

}




const Navbar = () => {
  // State to control the mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
     <TopRedNav/>
      <nav className="flex justify-between xl:justify-start  items-center w-full py-3 lg:py-3 px-4 md:px-5 lg:px-12 bg-[#000000] text-white">
        <div>
          <Image
            src={logo}
            width={200}
            height={300}
            alt="Logo"
          />
        </div>
        <div className="flex gap-2 items-center xl:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
      </svg>
          <svg
            className="w-[2rem] cursor-pointer"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            stroke="white"
            strokeWidth="1.68"
            onClick={toggleMenu}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M5 8H13.75M5 12H19M10.25 16L19 16" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
          </svg>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-[#000000] z-50 transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="flex justify-between items-center p-4">
            <Image
              src={logo}
              width={150}
              height={200}
              alt="Logo"
            />
            <svg
              className="w-[2rem] cursor-pointer"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              stroke="white"
              strokeWidth="1.68"
              onClick={toggleMenu}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M5 8H13.75M5 12H19M10.25 16L19 16" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </svg>
          </div>
          <div className="flex flex-col gap-4 mt-4 px-6">
            <a href="#" className="text-xl text-white">Transporters</a>
            <a href="#" className="text-xl text-white">Full Service Broker</a>
            <a href="#" className="text-xl text-white">Freight Forwarders/Brokers</a>
            <a href="#" className="text-xl text-white">pricing</a>
            <a href="#" className="text-xl text-white">book for a demo</a>
            <button className="bg-red-600 text-white py-2 px-4 rounded-md mt-4">
              Login
            </button>
          </div>
        </div>
        {/* desktop nav */}
        <div className=" items-center gap-32 px-10 hidden xl:flex ">
          <section className="flex items-center  gap-4">
              <div className="relative group">
                  <span className="absolute -right-[8px] bottom-[2px]">
                    <svg className="w-[.4rem] h-[.4rem]"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 7 5" fill="none">
                    <path d="M0.444336 1L3.44434 4L6.44434 1" stroke="white" stroke-width="0.5"/>
                    </svg>
                  </span>
              
                  <p >Transporters</p>
                  <ul className="bg-[#000000] absolute w-[150px] py-4 pb-6 pl-2 hidden group-hover:block z-10">
                    <li value=""> Search Loads</li>
                    <li value=""> Post A truck</li>
                    <li value=""> EAc Profile</li>
                  
                  </ul>

                </div>
                <div className="relative">
                  <span className="absolute -right-[8px] bottom-[2px]">
                    <svg className="w-[.4rem] h-[.4rem]"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 7 5" fill="none">
                    <path d="M0.444336 1L3.44434 4L6.44434 1" stroke="white" stroke-width="0.5"/>
                    </svg>
                  </span>
               
                  <p >Full Service Broker</p>
                  

                </div>
                <div className="relative">
                  <span className="absolute -right-[8px] bottom-[2px]">
                    <svg className="w-[.4rem] h-[.4rem]"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 7 5" fill="none">
                    <path d="M0.444336 1L3.44434 4L6.44434 1" stroke="white" stroke-width="0.5"/>
                    </svg>
                  </span>
                
                  <p >Freight Forwarders/Brokers</p>
                 

                </div>
          </section>
          <section className="flex text-[.8rem] gap-3 justify-center items-center mb-2 font-semibold">
          <button className="bg-white text-red-600  px-5 rounded-xl mt-4 py-1 ">
               Pricing
            </button>
            <button className="bg-red-600 text-white py-1 px-5 rounded-xl mt-4 text-nowrap">
              Book A Free Demo
            </button>

          </section>
        </div>

      
      </nav>
    </>
    
  );
};

export default Navbar;
