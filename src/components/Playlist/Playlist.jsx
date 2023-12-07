import picture2 from '../../assets/img/picture2.png';
import {HiPlay} from 'react-icons/hi2';
import PlaylistDropDown from './PlaylistDropDownd.jsx';
import React from "react";


const Playlist = () => {
    const [heartActive, setHeartActive] = React.useState(false);

    const onClickHeart = () => setHeartActive(!heartActive);

    return (
        <div className="rounded-mb duration-200">
            <div className="relative group">
                <img src={picture2} alt="картинка" className="rounded shadow-lg"/>
                <button
                    className="absolute left-2 bottom-2 cursor-pointer duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <HiPlay size={32} color="#eae4e4"/>
                </button>
            </div>
            <div
                className="flex justify-between w-[154px] mt-[9px] mb-1 tracking-wide capitalize text-[14px] text-[#eae4e4] font-sans">
                <h3 className="line-clamp-2 font-semibold font-{600}">Заголовок</h3>
                <PlaylistDropDown heartActive={heartActive} onClickHeart={onClickHeart}/>
            </div>
        </div>
    );
};

export default Playlist;
