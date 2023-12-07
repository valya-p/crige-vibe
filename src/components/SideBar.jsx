import React from 'react';
import {useSelector} from 'react-redux';

import logosvg from '../assets/img/logo.svg';
import {BsFire, BsPerson} from 'react-icons/bs';
import {AiFillPlaySquare, AiOutlineClose} from 'react-icons/ai';
import {BiSolidRadio} from 'react-icons/bi';
import {LiaSearchSolid} from 'react-icons/lia';

const SideBar = ({isSidebarActive, setSidebarActive, setAuthModalActive, isBlurred}) => {
    const handleProfileClick = () => setAuthModalActive(true);

    const userInfo = useSelector(state => state.auth.userInfo);

    return (
        <aside
            className={`${isBlurred ? 'filter blur-sm' : ''} ${isSidebarActive ? '' : '-translate-x-full'} bg-[#1D1D1D] w-full sm:w-[256px] text-[#b2b2b2] flex flex-col fixed lg:sticky top-0 z-20 h-screen lg:h-auto target:translate-x-0 lg:translate-x-0 transition-transform peer`}>
            <div className="flex justify-between items-center my-6 pl-5 pr-6 w-full">
                <div className="items-center flex">
                    <img src={logosvg} alt="лого" className="w-[59px] mr-[9px]"/>
                    <h1 className="text-[#F65CF0] text-[24px] font-amaranth">
                        Cringe<span className="text-[#E3D2F8]">Vibe</span>
                    </h1>
                </div>
                <button className="sm:hidden block" onClick={() => setSidebarActive(false)}>
                    <AiOutlineClose size={24}/>
                </button>
            </div>
            <div className="mx-2 py-2 mb-8 pl-1">
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
            </div>
            <nav>
                {userInfo ?
                    (<div
                        className="flex items-center cursor-pointer hover:text-[#FFFFFF] mx-2 px-4 py-2 rounded duration-300 hover:bg-[#232323]">
                        <img src={userInfo.avatar_url} alt="avatar" className='h-[24px] w-[24px] rounded-full'/>
                        <span className="ml-4 text-sm font-sans font-normal truncate">{userInfo.name}</span>
                    </div>) :
                    (<div
                        className="flex items-center cursor-pointer hover:text-[#FFFFFF] mx-2 px-4 py-2 rounded duration-300 hover:bg-[#232323]"
                        onClick={handleProfileClick}>
                        <BsPerson size={24}/>
                        <span className="ml-4 text-sm font-sans font-normal">Профиль</span>
                    </div>)
                }
                <div
                    onClick={userInfo ? undefined : handleProfileClick}
                    className={`flex items-center cursor-pointer hover:text-[#FFFFFF] hover:bg-[#232323] mx-2 px-4 py-2 rounded duration-300`}>
                    <BsFire size={24}/>
                    <span className="ml-4 text-sm font-sans font-normal">Популярное</span>
                </div>
                <div
                    onClick={userInfo ? undefined : handleProfileClick}
                    className={`flex items-center cursor-pointer hover:text-[#FFFFFF] mx-2 px-4 py-2 rounded duration-300 hover:bg-[#232323]`}>
                    <AiFillPlaySquare size={24}/>
                    <span className="ml-4 text-sm font-sans font-normal">Плейлисты</span>
                </div>
                <div
                    onClick={userInfo ? undefined : handleProfileClick}
                    className={`flex items-center cursor-pointer hover:text-[#FFFFFF] mx-2 px-4 py-2 rounded duration-300 hover:bg-[#232323]`}>
                    <BiSolidRadio size={24}/>
                    <span className="ml-4 text-sm font-sans font-normal">Радио</span>
                </div>
            </nav>
            <footer className="mt-auto mb-5 ml-6">
                <ul>
                    <li>
                        <div className="text-[12px] hover:underline py-2 font-sans font-normal">
                            Эл. почта для связи: <br/>
                            <span className="font-sans font-semibold">cringules@gmail.com</span>
                        </div>
                    </li>
                    <li>
                        <div className="text-[12px] hover:underline py-2 font-sans font-normal">
                            © Все материалы защищены <br/>
                            Cringe Company
                        </div>
                    </li>
                </ul>
            </footer>
        </aside>
    );
};

export default SideBar;
