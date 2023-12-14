import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {FaRegHeart, FaHeart} from 'react-icons/fa'
import {HiPlay, HiPause} from 'react-icons/hi2'
import Skeleton from 'react-loading-skeleton'
import { trackFetch } from '../../redux/services/musicService'

import TrackDropDown from './TrackDropDown'
import { pause } from '../../redux/slices/trackSlice'

const Track = ({ track, currentTrack }) => {
    const dispatch = useDispatch()
    const [heartActive, setHeartActive] = React.useState(false);

    const userInfo = useSelector(state => state.authSlice.userInfo);

    const onClickHeart = () => setHeartActive(!heartActive);

    const onClickPlay = () => {
        dispatch(trackFetch({ trackId: track.id }))
    }

    const onClickPause = () => {
        dispatch(pause())
    }

    const isPlaying = currentTrack?.data?.id === track?.id & (currentTrack?.isPlaying) & currentTrack?.data !== null

    return (
        <div
            className="rounded-[4px] border border-pink group hover:bg-[#1D1D1D] hover:border-[#bd1ab5] duration-500 mb-[13px] pl-[14px] pr-[15px] py-[12px] sm:pr-[32px] justify-between flex items-center">
            <div className="min-w-0 flex items-center relative group">
                <div
                    className="h-[50px] min-w-[50px] w-[50px] relative mr-[14px] flex justify-center items-center cursor-pointer ">
                    {track ? 
                    <div
                        onClick={isPlaying ? onClickPause : onClickPlay}
                        className="absolute inset-0 rounded-md bg-cover transition-brightness duration-500 group-hover:brightness-50"
                        style={{
                            backgroundImage: `url(${track.cover_url})`,
                        }}/> :
                    <Skeleton width={50} height={50} highlightColor={'#bdbdbd'}/>
                    }
                    {isPlaying ? (
                        <button
                            className="absolute left-50% bottom-50% cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105 pointer-events-none">
                            <HiPause color="#F65CF0" size={24}/>
                        </button>
                    ) : (
                        <button
                            className="absolute left-50% bottom-50% cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105 pointer-events-none">
                            <HiPlay color="#F65CF0" size={24}/>
                        </button>
                    )}
                </div>
                <div className={"flex flex-col overflow-hidden w-[500px]"}>
                    <p className="text-[14px] sm:text-[16px] font-sans mb-[5px] truncate">{track ? track.title : <Skeleton highlightColor={'#bdbdbd'}/>}</p>
                    <p className="text-[12px] sm:text-[14px] font-sans truncate">
                        {track ? track.artists.map((obj) => obj.name).join(', ') : <Skeleton highlightColor={'#bdbdbd'}/>}
                    </p>
                </div>
            </div>
            <div className="flex items-center relative">
                <p className="text-[14px] mr-[24px] hidden sm:block">{track ? track.duration_text : <Skeleton highlightColor={'#bdbdbd'}/>}</p>
                {track ? userInfo && <button className="mr-[24px] hidden sm:block" onClick={onClickHeart}>
                    {heartActive ? (
                        <FaHeart size={24} color="#F65CF0"/>
                    ) : (
                        <FaRegHeart size={24} color="#F65CF0"/>
                    )}
                </button> :
                <Skeleton width={24} height={24} highlightColor={'#bdbdbd'}/>
                }
                {track ? <TrackDropDown heartActive={heartActive} onClickHeart={onClickHeart}/> : <Skeleton width={24} height={10} className='ml-[10px]' highlightColor={'#bdbdbd'}/>}
            </div>
        </div>
    );
};

export default Track;
