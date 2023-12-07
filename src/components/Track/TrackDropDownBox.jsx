import React from 'react';
import { FaDog } from 'react-icons/fa';

const TrackDropDownBox = React.forwardRef(( props, ref ) => {
  return (
    <div ref={ref}>
      <div
        className="absolute right-0 z-10 mt-2 w-58 border bg-opacity-95 border-[#E3D2F8] bg-[#282828] text-[#b2b2b2] text-sm p-1 rounded shadow-xl cursor-default whitespace-nowrap divide-y divide-[#3e3e3e]"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1">
        <div className="py-1" role="none">
          <div
            className="hover:text-white hover:bg-[#3e3e3e] cursor-default px-4 py-2 text-sm flex items-center"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0">
            <FaDog color="#eae4e4" size={24} className="mr-[9px]" />
            <p>Нравится</p>
          </div>
          <div
            className="hover:text-white hover:bg-[#3e3e3e] cursor-default px-4 py-2 text-sm flex items-center"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0">
            <FaDog color="#eae4e4" size={24} className="mr-[9px]" />
            <p>Добавить в Плейлист</p>
          </div>
        </div>
        <div className="py-1" role="none">
          <div
            className="hover:text-white hover:bg-[#3e3e3e] cursor-default px-4 py-2 text-sm flex items-center"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0">
            <FaDog color="#eae4e4" size={24} className="mr-[9px]" />
            <p>Поделиться</p>
          </div>
          <div
            className="hover:text-white hover:bg-[#3e3e3e] cursor-default px-4 py-2 text-sm flex items-center"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0">
            <FaDog color="#eae4e4" size={24} className="mr-[9px]" />
            <p>Скачать</p>
          </div>
        </div>
        <div className="py-1" role="none">
          <div
            className="hover:text-white hover:bg-[#3e3e3e] cursor-default px-4 py-2 text-sm flex items-center"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0">
            <FaDog color="#eae4e4" size={24} className="mr-[9px]" />
            <p>Перейти к Исполнителю</p>
          </div>
          <div
            className="hover:text-white hover:bg-[#3e3e3e] cursor-default px-4 py-2 text-sm flex items-center"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0">
            <FaDog color="#eae4e4" size={24} className="mr-[9px]" />
            <p>О треке</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default TrackDropDownBox;
