import React from 'react';
import Track from './Track';
import { useGetChartsQuery } from '../../redux/services/cringeVibeCore';

const TrackContainer = () => {
  const limit = 10;
  const offset = 0;
  const { data, isFetching, error } = useGetChartsQuery({ limit, offset });

  return (
    <div className="mb-[42px] w-full xl:w-7/12">
      {/* заголовок */}
      <div className="mb-[42px]">
        <h2 className="text-[24px] text-[#F65CF0] font-Amaranth font-{400} capitalize">
          Recomended
        </h2>
        <p className="text-[20px] text-[#eae4e4] font-['Open_Sans'] font-{400}">Подзаголовок</p>
      </div>
      {/* карточки */}
      {data?.map((obj) => (
        <Track track={obj} active={false}/>
      ))}
    </div>
  );
};

export default TrackContainer;
