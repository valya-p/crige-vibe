import {FaHeart, FaRegHeart} from 'react-icons/fa';
import {Menu, Transition} from '@headlessui/react';
import React, {Fragment} from 'react';
import {HiEllipsisHorizontal} from 'react-icons/hi2';
import {HiDownload} from "react-icons/hi";
import {FaPersonWalking, FaPlus} from "react-icons/fa6";
import {FiInfo, FiShare} from "react-icons/fi";

const TrackDropDown = ({ heartActive, onClickHeart }) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button>
                    <HiEllipsisHorizontal size={24}
                                          className="hover:scale-105"
                                          aria-hidden="true"
                    />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className="z-10 absolute mt-0 right-0 w-56 origin-top-right divide-y rounded-md text-white border-[#E3D2F8] bg-[#282828] border divide-[#3e3e3e] shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div className="px-1 py-1 ">
                        <Menu.Item>
                            {({active}) => (
                                <button
                                    className={`${
                                        active ? 'bg-violet-700' : ''
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    onClick={onClickHeart}
                                >
                                    {heartActive ? (
                                        <FaHeart size={16} className={"mr-2"}/>
                                    ) : (
                                        <FaRegHeart size={16} className={"mr-2"}/>
                                    )}
                                    Нравится
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({active}) => (
                                <button
                                    className={`${
                                        active ? 'bg-violet-700' : ''
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    <HiDownload size={16} className={"mr-2"}/>
                                    Скачать
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                        <Menu.Item>
                            {({active}) => (
                                <button
                                    className={`${
                                        active ? 'bg-violet-700' : ''
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    <FaPlus size={16} className={"mr-2"}/>
                                    Добавить в Плейлист
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({active}) => (
                                <button
                                    className={`${
                                        active ? 'bg-violet-700' : ''
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    <FiShare size={16} className={"mr-2"}/>
                                    Поделиться
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                        <Menu.Item>
                            {({active}) => (
                                <button
                                    className={`${
                                        active ? 'bg-violet-700' : ''
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    <FaPersonWalking size={16} className={"mr-2"} />
                                    Перейти к исполнителю
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                        <Menu.Item>
                            {({active}) => (
                                <button
                                    className={`${
                                        active ? 'bg-violet-700' : ''
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    <FiInfo size={16} className={"mr-2"}/>
                                    О треке
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
};

export default TrackDropDown;