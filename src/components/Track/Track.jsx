import React from 'react';
import { useClickAway } from '@uidotdev/usehooks';

import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { HiPlay, HiPause, HiEllipsisHorizontal } from 'react-icons/hi2';

import TrackDropDownBox from './TrackDropDownBox';

const Track = ({ track, active }) => {
  const [heartActive, setHeartActive] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState(false);

  const onClickHeart = () => {
    setHeartActive(!heartActive);
  };

  // открывается повторно
  const ref = useClickAway(() => {
    setOpenDropdown(false);
  });

  return (
    <>
      <div className="rounded-[4px] border border-pink group hover:bg-[#1D1D1D] hover:border-[#bd1ab5] mb-[13px] pl-[14px] pr-[15px] py-[12px] sm:pr-[32px] justify-between flex items-center">
        <div className="flex items-center relative group">
          <div
            className="h-[50px] w-[50px] bg-[url:var(--track-img-url)] bg-cover rounded-md mr-[14px] flex justify-center items-center"
            style={{
              '--track-img-url': `url(${track.cover_url})`,
            }}>
            {active ? (
              <button className="absolute left-50% bottom-50% cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                <HiPause color="#F65CF0" size={24} />
              </button>
            ) : (
              <button className="absolute left-50% bottom-50% cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                <HiPlay color="#F65CF0" size={24} />
              </button>
            )}
          </div>
          <div>
            <p className=" text-[12px] sm:text-[14px] font-sans mb-[5px]">{track.title}</p>
            <p className="text-[10px] sm:text-[12px] font-sans">
              {track.artists.map((obj) => obj.name).join(', ')}
            </p>
          </div>
        </div>
        <div className="flex items-center relative">
          <p className="text-[14px] mr-[24px] hidden sm:block">{track.duration_text}</p>
          <button className="mr-[24px] hidden sm:block" onClick={onClickHeart}>
            {heartActive ? (
              <FaHeart size={24} color="#F65CF0" />
            ) : (
              <FaRegHeart size={24} color="#F65CF0" />
            )}
          </button>
          <button>
            <HiEllipsisHorizontal
              size={24}
              color="#F65CF0"
              onClick={() => setOpenDropdown(!openDropdown)}
            />
          </button>
          {openDropdown && <TrackDropDownBox ref={ref} />}
        </div>
      </div>
    </>
  );
};

export default Track;
