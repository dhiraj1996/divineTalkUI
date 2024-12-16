// import React from "react";
import star from "/Group 129758.png";
import tick from "/tick.png"

const AstrologerCards = ({data}) => {
  return (
    <>
      {/* main card start from here */}
      <div className="flex justify-between p-4 rounded-lg shadow-lg border border-gray-200 h-[133px] lg:h-auto">
        <div className="flex items-start pt-2">
          <img
            className="rounded-full h-20 w-20 border-2 border-tertiary lg:h-[90px] lg:w-[90px]"
            src={data.img}
            alt="astrologers"
          />
        </div>
        <div className="text-primary min-w-36">
          <p className="font-semibold text-base lg:text-2xl flex items-center justify-between 2xl:text-2xl">
            {data.name}
            <img src={star}
                className="h-4"  />
          </p>
          <p className="truncate text-xs lg:text-base">{data.astro}</p>
          <p className="truncate text-xs lg:text-base">{data.language}</p>
          <p className="truncate text-xs lg:text-base">Exp: {data.experience}</p>
          <p>
            <strike>25</strike>FREE
          </p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <div className="w-full">
          <img className="float-right h-6 w-6 lg:h-8 lg:w-8" src={tick} alt="green tick" />
          </div>
          <div className="text-center">
            <button className="py-1 px-7 lg:px-4 lg:py-1 font-semibold text-tertiary border border-tertiary rounded-[10px]">
              Chat
            </button>
            <p className="text-[10px] lg:text-sm">Wait-7min</p>
          </div>
        </div>
      </div>




      
    </>
  );
};

export default AstrologerCards;
