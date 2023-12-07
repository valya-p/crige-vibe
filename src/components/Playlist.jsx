import picture2 from '../assets/img/picture2.png';
import {  HiPlay } from 'react-icons/hi2';
import DropDownd from './PlaylistDropDownd';


const Playlist = () => {

  return (
    <div className="flex-[0_0_10%] rounded-mb duration-200">
      <div className="relative group">
        <img src={picture2} alt="картинка" className="rounded shadow-lg" />
        <button className="absolute left-2 bottom-2 cursor-pointer duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
          <HiPlay size={32} color="#eae4e4" />
        </button>
      </div>
      <div className="flex justify-between w-[154px] mt-[9px] mb-1 font-semibold tracking-wide capitalize text-[14px] text-[#eae4e4] font-sans font-{600}">
        <h3 className="line-clamp-2">Заголовок fpfpfpfpfpfpfpfpfp ghggjghj</h3>
        <DropDownd />
      </div>
    </div>
  );
};

export default Playlist;
