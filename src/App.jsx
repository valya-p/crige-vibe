import React from 'react';
import './index.css';
import {useSelector} from 'react-redux';

import SideBar from './components/SideBar';
import Banner from './components/Banner';
import TrackContainer from './components/Track/TrackContainer';
import PlaylistContainer from './components/Playlist/PlaylistContainer.jsx';
import Player from './components/Player';

import {HiMenu} from 'react-icons/hi';
import ModalWindow from './components/ModalWindow';
import Carousel from "react-multi-carousel";
import Playlist from "./components/Playlist/Playlist.jsx";

function App() {
    const [isSidebarActive, setSidebarActive] = React.useState(false);
    const [isAuthModalActive, setAuthModalActive] = React.useState(false);

    const userInfo = useSelector(state => state.auth.userInfo);

    React.useEffect(() => {
        if (userInfo && isAuthModalActive) {
            setAuthModalActive(false);
        }
    }, [isAuthModalActive, userInfo]);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

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
                    className={`flex-1 overflow-auto ${isAuthModalActive ? 'blur-sm' : ''} ${
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
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                centerMode={true}
                                autoPlay={true}
                                autoPlaySpeed={5000}
                            >
                                <Playlist />
                                <Playlist />
                                <Playlist />
                                <Playlist />
                                <Playlist />
                            </Carousel>
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
