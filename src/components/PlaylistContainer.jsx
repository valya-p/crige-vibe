import React from 'react';
import Playlist from './Playlist';

const PlaylistContainer = () => {
  return (
    <div className="xl:w-4/12">
      {/* заголовок */}
      <div className="mb-[40px]">
        <h2 className="text-[24px] text-[#F65CF0] font-Amaranth font-{400} capitalize">
          Day's<span className="text-[#E3D2F8]">Playlists</span>
        </h2>
        <p className="text-[20px] text-[#eae4e4] font-['Open_Sans'] font-{400}">Подзаголовок</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-2 min-[1952px]:grid-cols-3 gap-3">
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    </div>
  );
};

export default PlaylistContainer;
