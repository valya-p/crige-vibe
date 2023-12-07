import React from 'react';

import {
    HiPause,
    HiEllipsisHorizontal,
    HiArrowPathRoundedSquare,
    HiArrowTopRightOnSquare,
} from 'react-icons/hi2';
import {TbPlayerSkipBackFilled, TbPlayerSkipForwardFilled} from 'react-icons/tb';
import {FaRegHeart} from 'react-icons/fa';

const Player = () => {
    return (
        <div
            className="row-start-6 bg-[#1D1D1D] text-white py-[10px] px-[15px] flex justify-between items-center sm:py-[15px] lg:px-[85px] md:py-[15px] md:px-[50px]">
            <div className="flex items-center mr-[20px]">
                <button className="hover:scale-105">
                    <TbPlayerSkipBackFilled
                        size={24}
                        className="mr-[9px] text-[#91448E] hover:text-[#F65CF0]"
                    />
                </button>
                <div className="h-[46px] w-[46px] bg-[#D9D9D9] mr-[9px] flex justify-center items-center">
                    <HiPause color="#F65CF0" size={24}/>
                </div>
                <button className="hover:scale-105">
                    <TbPlayerSkipForwardFilled
                        size={24}
                        className="mr-[11px] text-[#91448E] hover:text-[#F65CF0]"
                    />
                </button>
                <div>
                    <p className=" text-[12px] sm:text-[14px] font-sans mb-[5px]">Микрозаголовок</p>
                    <p className="text-[10px] sm:text-[12px] font-sans">Микрозаголовок</p>
                </div>
            </div>
            <input
                type="range"
                step="any"
                min={1}
                max={100}
                className="w-2/4 h-1 accent-[#F65CF0] hidden sm:block"
            />
            <div className="flex justify-center items-center ml-[20px]">
                <p className="mr-[24px] hidden sm:block">02:45</p>
                <button className="hover:scale-105 hidden sm:block">
                    <HiArrowPathRoundedSquare size={24} color="#F65CF0" className="mr-[24px] "/>
                </button>
                <button className="hover:scale-105 ">
                    <FaRegHeart size={24} color="#F65CF0" className="mr-[24px]"/>
                </button>
                <button className="hover:scale-105 hidden sm:block">
                    <HiArrowTopRightOnSquare size={24} color="#F65CF0" className="mr-[24px]"/>
                </button>
                <button className="hover:scale-105">
                    <HiEllipsisHorizontal size={24} color="#F65CF0"/>
                </button>
            </div>
        </div>
    );
};

export default Player;
