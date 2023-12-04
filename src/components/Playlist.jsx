import React from 'react';

import picture2 from '../assets/img/picture2.png';
import { HiEllipsisHorizontal, HiPlay } from 'react-icons/hi2';

const Playlist = () => {
  return (
    <div href="#" className="flex-[0_0_10%] rounded-mb duration-200">
      <div className="relative group">
        <img src={picture2} alt="картинка" className="rounded shadow-lg" />
        <button className="absolute left-2 bottom-2 cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
          <HiPlay size={32} color="#eae4e4" />
        </button>
      </div>
      <div className="flex mt-[9px] mb-1 font-semibold tracking-wide capitalize text-[14px] text-[#eae4e4] font-['Open_Sans'] font-{600}">
        <h3 className="mr-5">Микрозаголовок</h3>
        <button className="hover:scale-105">
          {' '}
          <HiEllipsisHorizontal size={24} />
        </button>
      </div>
    </div>
  );
};

export default Playlist;
