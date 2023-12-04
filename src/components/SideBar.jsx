import React from 'react';

import logosvg from '../assets/img/logo.svg';
import { BsFire, BsPerson } from 'react-icons/bs';
import { AiFillPlaySquare, AiOutlineClose } from 'react-icons/ai';
import { BiSolidRadio } from 'react-icons/bi';
import { LiaSearchSolid } from 'react-icons/lia';
import ModalWindow from './ModalWindow';

const SideBar = () => {
const [isOpen, setIsOpen] = React.useState(false);

const handleProfileClick = () => {
  setIsOpen(true);
};

  return (
    <aside
      id="sidebar"
      className="bg-[#1D1D1D] w-full sm:w-[256px] text-[#b2b2b2] flex flex-col fixed lg:sticky top-0 z-20 h-screen lg:h-auto -translate-x-full target:translate-x-0 lg:translate-x-0 transition-transform peer">
      <div className="flex justify-between items-center my-6 pl-5 pr-6 w-full ">
        <div className="items-center flex">
          <img src={logosvg} alt="лого" className="w-[59px] mr-[9px]" />
          <h1 className="text-[#F65CF0] text-[24px]">
            Cringe<span className="text-[#E3D2F8]">Vibe</span>
          </h1>
        </div>
        <a href="/#" className="sm:hidden block">
          <AiOutlineClose size={24} />
        </a>
      </div>
      <div className="mx-2 py-2 mb-8 pl-1">
          <form>
            <div className="relative">
              <input
                type="text"
                id="default-search"
                className="block w-full py-2 pl-4 text-sm text-white  bg-zinc-800 rounded-[30px] border-2 border-violet-700 focus:outline-none"
                placeholder="Поиск..."
                autoComplete="off"
                required
              />
              <LiaSearchSolid size={24} className="absolute end-2.5 bottom-2"/>
            </div>
          </form>
        </div>
      <nav>
        <div className={`flex items-center cursor-pointer hover:text-[#FFFFFF] hover:bg-[#232323] mx-2 px-4 py-2 rounded duration-300`}>
          <BsFire size={24} />
          <span className="ml-4 text-sm font-sans font-normal">Популярное</span>
        </div>
        <div className={`flex items-center cursor-pointer hover:text-[#FFFFFF] mx-2 px-4 py-2 rounded duration-300 hover:bg-[#232323]`}>
          <AiFillPlaySquare size={24} />
          <span className="ml-4 text-sm font-sans font-normal">Плейлисты</span>
        </div>
        <div className={`flex items-center cursor-pointer hover:text-[#FFFFFF] mx-2 px-4 py-2 rounded duration-300 hover:bg-[#232323]`}>
          <BiSolidRadio size={24} />
          <span className="ml-4 text-sm font-sans font-normal">Радио</span>
        </div>
        <div className="flex items-center cursor-pointer hover:text-[#FFFFFF] mx-2 px-4 py-2 rounded duration-300 hover:bg-[#232323]"  onClick={handleProfileClick}>
          <BsPerson size={24} />
          <span className="ml-4 text-sm font-sans font-normal">Профиль</span>
        </div>
      </nav>
      <footer className="mt-auto mb-5 ml-6">
        <ul>
          <li>
            <div href="#" className="text-[12px] hover:underline py-2 font-sans font-normal">
              Эл. почта для связи: <br />
              <span className="font-sans font-semibold">cringules@gmail.com</span>
            </div>
          </li>
          <li>
            <div href="#" className="text-[12px] hover:underline py-2 font-sans font-normal">
              © Все материалы защищены <br />
              Cringe Company
            </div>
          </li>
        </ul>
      </footer>
      {isOpen && <ModalWindow isOpen={isOpen} setIsOpen={setIsOpen}/>}
    </aside>
  );
};

export default SideBar;
