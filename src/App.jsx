import React from 'react';
import './index.css';

import SideBar from './components/SideBar';
import Header from './components/Header';
import Banner from './components/Banner';
import TrackContainer from './components/Track/TrackContainer';
import PlaylistContainer from './components/PlaylistContainer';
import Player from './components/Player';
import Playlist from './components/Playlist';
import TrackCarousel from './components/TrackCarousel';

import { HiMenu } from 'react-icons/hi';

function App() {
  const [active, setActive] = React.useState(false);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="appjs" className="flex flex-col bg-[#232323] h-screen">
      <div class="flex flex-grow overflow-auto">
        <SideBar />
        <a
          onClick={() => setActive(false)}
          hidden={!active}
          href="/#"
          className="fixed inset-0 bg-black opacity-0 peer-target:opacity-50 peer-target:z-10 lg:hidden cursor-default transition-opacity"></a>
        <div className="flex-1">
          <a
            onClick={() => setActive(true)}
            href="#sidebar"
            className={`${active? 'hidden' : ''} text-[#969696] p-1 ml-2.5 inline-block lg:hidden fixed z-30 `}>
            <HiMenu size={24} />
          </a>
          <main className="text-white relative">
            <Banner />
            {/* основная часть */}
            <div className="pr-[16px] pl-[40px] sm:pl-[35px] sm:pr-[35px]">
              {/* <TrackCarousel /> */}
              <div className="flex justify-between flex-wrap">
                {/* блок с треками */}
                <TrackContainer />
                {/* блок с плейлистами */}
                <PlaylistContainer />
              </div>
            </div>
          </main>
        </div>
      </div>
      <Player />
    </div>
  );
}

export default App;
