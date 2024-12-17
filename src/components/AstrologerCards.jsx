// import React from "react";
import star from "/Group 129758.png";
import tick from "/tick.png"

const AstrologerCards = ({data}) => {
  return (
    <>
      {/* main card start from here */}
      <div className="flex justify-between font-metropolis p-3 lg:p-4 rounded-[10px] shadow-md border border-gray-200 h-[133px] lg:rounded-[20px] lg:h-[150px] 2xl:h-[186px] 2xl:p-6">
        <div className="flex items-start pt-2 mr-4 lg:mr-0">
          <img
            className="rounded-full h-20 w-20 border-2 border-tertiary lg:h-[90px] lg:w-[90px] 2xl:h-[108px] 2xl:w-[108px]"
            src={data.img}
            alt="astrologers"
          />
        </div>

        {/* Card Middle Part starts from here */}
        <div className="text-primary w-36 lg:w-36 2xl:w-40 2xl:ml-5">
          <p className="font-semibold text-base lg:text-2xl flex items-center justify-between 2xl:text-2xl">
            {data.name}
            <img src={star}
                className="h-4 2xl:h-5"  />
          </p>
          <div className="text-[#0E233980]">
            <p className="truncate text-xs  lg:text-base">{data.astro}</p>
            <p className="truncate text-xs lg:text-base">{data.language}</p>
            <p className="truncate text-xs lg:text-base">Exp: {data.experience}</p>
            <p>
              <strike>25</strike>FREE
            </p>
          </div>
        </div>
        {/* Card Middle Part ends here */}

        <div className="flex flex-col justify-between items-center">
          <div className="w-full">
          <img className="float-right h-6 w-6 lg:h-8 lg:w-8" src={tick} alt="green tick" />
          </div>
          <div className="text-center">
            <button className={`py-1 px-7 lg:px-4 lg:py-1 font-semibold border ${data.wait ? "border-secondary text-secondary hover:bg-secondary": "border-tertiary text-tertiary hover:bg-tertiary"} rounded-[10px] 2xl:text-xl 2xl:px-8 2xl:py-3 hover:text-white`}>
              Chat
            </button>
            <p className="text-[10px] font-poppins lg:text-sm text-secondary 2xl:font-normal 2xl:text-xs">{data.wait}</p>
          </div>
        </div>
        
      </div>




      
    </>
  );
};

export default AstrologerCards;
