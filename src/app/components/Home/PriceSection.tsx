import React from "react";

const PriceSection = () => {
  return (
    <section>
     <div className="bg-[#444444] w-[90%] lg:w-[50%] flex gap-3 p-0 rounded-2xl mt-8 justify-between items-center mx-auto">
  {/* Monthly Option */}
  <div className="price-select flex items-center justify-center text-[.7rem] font-semibold  rounded-2xl m-0  cursor-pointer hover:bg-red-600 peer">
    <input type="radio" id="monthly" name="price" className="hidden peer" />
    <label
      htmlFor="monthly"
      className="cursor-pointer peer-checked:bg-red-600 peer-checked:text-white  py-3 rounded-2xl px-4 text-[.6rem] font-semibold m-0 "
    >
      Monthly
    </label>
  </div>

  {/* Quarterly Option */}
  <div className="price-select flex items-center justify-center text-[.7rem] font-semibold  rounded-2xl m-0  cursor-pointer hover:bg-red-600 peer">
    <input type="radio" id="quarterly" name="price" className="hidden peer" />
    <label
      htmlFor="quarterly"
      className="cursor-pointer peer-checked:bg-red-600 peer-checked:text-white py-3 rounded-2xl px-4 text-[.6rem] font-semibold m-0 "
    >
      Quarterly
    </label>
  </div>

  {/* Semi-Annual Option */}
  <div className="price-select flex items-center justify-center text-[.8rem] rounded-2xl   hover:bg-red-600 peer">
    <input type="radio" id="semi-annual" name="price" className="hidden peer" />
    <label
      htmlFor="semi-annual"
      className="cursor-pointer peer-checked:bg-red-600 peer-checked:text-white  py-3 rounded-2xl px-4 text-[.6rem] font-semibold m-0 "
    >
      Semi-Annual
    </label>
  </div>

  {/* Yearly Option */}
  <div className="price-select flex items-center justify-center text-[.7rem] font-semibold  rounded-2xl m-0  cursor-pointer hover:bg-red-600 peer">
    <input type="radio" id="yearly" name="price" className="hidden peer" />
    <label
      htmlFor="yearly"
      className="cursor-pointer peer-checked:bg-red-600 peer-checked:text-white font-semibold py-3 rounded-2xl px-4 text-[.6rem] font-semibold m-0 "
    >
      Yearly
    </label>
  </div>
</div>
 
 {/* price card section */}
 <section className="mt-6 h-[50rem]" >
    <main className="bg-[#292929]  text-lg w-[20rem]  text-white rounded-xl mx-auto">
        <div className="text-white pt-6  px-4">
            <h5 className="font-bold">Transporter</h5>
            <div className="mt-5">
                <p className="m-0 text-2xl font-bold"><span className="text-4xl text-red-500">$5</span> /month</p>
                <p className="mt-2 text-[.9rem]">Entity responsible for moving goods from one location to another.</p>
                <section className="mt-5">
                    <div>
                        <p className="flex justify-start items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-[1.5rem] h-[1.5rem]" xmlSpace="preserve" id="tick" x="0" y="0" stroke="black" version="1.1" viewBox="0 0 512 512">         
                            <circle cx="256" cy="256" r="208" fill="white"></circle>
                            <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm-32.1 281.7c-2.4 2.4-5.8 4.4-8.8 4.4s-6.4-2.1-8.9-4.5l-56-56 17.8-17.8 47.2 47.2L340 177.3l17.5 18.1-133.6 134.3z" fill="red"></path>
                            </svg>
                        Unlimited load searching
                        </p>
                        <p className="flex justify-start items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-[1.5rem] h-[1.5rem]" xmlSpace="preserve" id="tick" x="0" y="0" stroke="black" version="1.1" viewBox="0 0 512 512">         
                            <circle cx="256" cy="256" r="208" fill="white"></circle>
                            <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm-32.1 281.7c-2.4 2.4-5.8 4.4-8.8 4.4s-6.4-2.1-8.9-4.5l-56-56 17.8-17.8 47.2 47.2L340 177.3l17.5 18.1-133.6 134.3z" fill="red"></path>
                            </svg>
                            Unlimited truck posting
                        </p>

                        <p className="flex justify-start items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-[1.5rem] h-[1.5rem]" xmlSpace="preserve" id="tick" x="0" y="0" stroke="black" version="1.1" viewBox="0 0 512 512">         
                            <circle cx="256" cy="256" r="208" fill="white"></circle>
                            <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm-32.1 281.7c-2.4 2.4-5.8 4.4-8.8 4.4s-6.4-2.1-8.9-4.5l-56-56 17.8-17.8 47.2 47.2L340 177.3l17.5 18.1-133.6 134.3z" fill="red"></path>
                            </svg>
                            EAC Profile Verification
                        </p>
                    </div>
                    <button className="bg-red-600 font-semibold w-full rounded-3xl text-center text-sm py-[3px] mt-8 mb-8">Get started</button>
                </section>
            </div>
        </div>
    </main>
 </section>

</section>
  )
};

export default PriceSection;
