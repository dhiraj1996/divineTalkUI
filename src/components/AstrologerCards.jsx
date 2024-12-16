// import React from "react";
import astrologerOne from "/astrologer 1.png";
import star from "/Group 129758.png";

const AstrologerCards = ({data}) => {
  return (
    <>
      {/* main card start from here */}
      <div className="flex justify-between p-4 rounded-lg shadow-lg border border-gray-200">
        <div className="flex items-center">
          <img
            className="rounded-full border border-tertiary h-[90px] w-[90px]"
            src={astrologerOne}
            alt="astrologers"
          />
        </div>
        <div className="text-primary w-36">
          <h1 className="font-semibold text-2xl flex items-center justify-between">
            {data.name}
            <img src={star}
                className="h-4"  />
          </h1>
          <p className="truncate ">{data.astro}</p>
          <p className="truncate">{data.language}</p>
          <p>Exp: {data.experience}</p>
          <p>
            <strike>25</strike>FREE
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <div>he</div>
          <div>
            <button className="px-4 py-1 font-semibold text-tertiary border border-tertiary rounded-[10px]">
              Chat
            </button>
            <p className="text-sm">Wait-7min</p>
          </div>
        </div>
      </div>




      
    </>
  );
};

export default AstrologerCards;
