import React from 'react';

import { HiMenu } from 'react-icons/hi';
import { BsPerson, BsSearch } from 'react-icons/bs';

const Header = () => {
  return (
    <header className="flex-1 flex items-center py-[10px] bg-[#232323] px-[13px] sm:px-[32px] justify-between top-0 z-10 sticky">
      <div className="flex">
        <a href="#sidebar" className="text-[#969696] p-1 ml-2.5 inline-block">
          <HiMenu size={24} />
        </a>
      </div>
      <div className="flex justify-center items-center">
        <a href="#sidebar" className="text-[#969696] p-1 mr-[59px] py-[9px] px-[17px] inline-block">
          <BsSearch size={24} />
        </a>
        <div className="text-[#969696] p-1 py-[9px] px-[17px]">
          <BsPerson size={27} />
        </div>
      </div>
    </header>
  );
};

export default Header;
