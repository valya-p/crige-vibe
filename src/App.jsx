import React from 'react';
import './index.css';

import SideBar from './components/SideBar';
import Banner from './components/Banner';
import TrackContainer from './components/Track/TrackContainer';
import PlaylistContainer from './components/PlaylistContainer';
import Player from './components/Player';

import {HiMenu} from 'react-icons/hi';
import ModalWindow from './components/ModalWindow';

function App() {
    const [isSidebarActive, setSidebarActive] = React.useState(false);
    const [isAuthModalActive, setAuthModalActive] = React.useState(false);

    return (
        <div id="appjs" className="flex flex-col bg-[#232323] h-screen">
            <div className="flex flex-grow overflow-auto">
                <SideBar
                    isSidebarActive={isSidebarActive}
                    setSidebarActive={setSidebarActive}
                    setAuthModalActive={setAuthModalActive}
                    isBlurred={isAuthModalActive}
                />
                <div
                    onClick={() => setSidebarActive(false)}
                    className={`${
                        isSidebarActive ? 'opacity-60 z-10 backdrop-blur-md' : 'hidden'
                    } fixed inset-0 bg-black lg:hidden cursor-default transition-opacity`}></div>
                <div
                    className={`flex-1 ${isAuthModalActive ? 'blur-sm' : ''} ${
                        isSidebarActive ? 'max-lg:blur-sm' : ''
                    }`}>
                    <button
                        onClick={() => setSidebarActive(true)}
                        className={`${
                            isSidebarActive ? 'hidden' : ''
                        } text-[#969696] p-1 ml-2.5 inline-block lg:hidden fixed z-30`}>
                        <HiMenu size={24}/>
                    </button>
                    <main className="text-white relative">
                        <Banner/>
                        {/* основная часть */}
                        <div className="pr-[16px] pl-[40px] sm:pl-[35px] sm:pr-[35px]">
                            {/* <TrackCarousel /> */}
                            <div className="flex justify-between flex-wrap">
                                {/* блок с треками */}
                                <TrackContainer/>
                                {/* блок с плейлистами */}
                                <PlaylistContainer/>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            {isAuthModalActive && (
                <ModalWindow
                    isAuthModalActive={isAuthModalActive}
                    setAuthModalActive={setAuthModalActive}
                />
            )}
            <div
                className={`${isAuthModalActive ? 'blur-sm' : ''} ${
                    isSidebarActive ? 'max-lg:blur-sm' : ''
                }`}>
                <Player/>
            </div>
        </div>
    );
}

export default App;
