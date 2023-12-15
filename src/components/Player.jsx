import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {nextTrack, prevTrack, trackFetch} from '../redux/services/musicService'
import {disableLoading, pause, setProgress} from '../redux/slices/trackSlice'
import {convertMsToTime} from '../features/converter'

import {
    HiPlay,
    HiPause,
    HiEllipsisHorizontal,
    HiArrowPathRoundedSquare,
    HiArrowTopRightOnSquare,
} from 'react-icons/hi2';
import {TbPlayerSkipBackFilled, TbPlayerSkipForwardFilled} from 'react-icons/tb';
import {FaRegHeart} from 'react-icons/fa';

const Player = () => {
    const currentTrack = useSelector(state => state.trackSlice)
    const dispatch = useDispatch()

    const clickRef = React.useRef()
    const audioElem = React.useRef()

    const onClickPlay = () => {
        dispatch(trackFetch({trackId: currentTrack.data.id}))
    }

    const onClickPause = () => {
        dispatch(pause())
    }

    const onClickNext = () => {
        dispatch(nextTrack())
    }

    const onClickPrev = () => {
        dispatch(prevTrack())
    }

    React.useEffect(() => {
        if (!currentTrack.isLoading) {
            currentTrack.isPlaying ? audioElem.current.play() : audioElem.current.pause()
        }
    }, [currentTrack.isPlaying, currentTrack.isLoading])

    const onPlaying = () => {
        const duration = audioElem.current.duration
        const currentTime = audioElem.current.currentTime
        dispatch(
            setProgress({
                progress: currentTime / duration * 100,
                duration: duration,
                durationText: convertMsToTime(currentTime)
            })
        )
    }

    const checkWidth = (e) => {
        let rect = e.target.getBoundingClientRect()
        let x = e.clientX - rect.left
        let width = clickRef.current.clientWidth
        const divProgress = x / width * 100

        audioElem.current.currentTime = divProgress / 100 * currentTrack.duration
    }

    const onCanPlay = async () => {
        dispatch(disableLoading())
    }

    return (
        <div hidden={currentTrack.data === null}>
            <audio onEnded={onClickNext} onCanPlay={onCanPlay} src={currentTrack?.data?.download_info[0].direct_link} ref={audioElem}
                   onTimeUpdate={onPlaying}/>
            <div
                className="row-start-6 bg-[#1D1D1D] text-white py-[10px] px-[15px] flex justify-between items-center sm:py-[15px] lg:px-[85px] md:py-[15px] md:px-[50px] group">
                <div className="flex items-center mr-[10px]">
                    <button className="hover:scale-105" onClick={onClickPrev}>
                        <TbPlayerSkipBackFilled
                            size={24}
                            className="mr-[9px] text-[#91448E] hover:text-[#F65CF0]"
                        />
                    </button>
                    <div
                        className="h-[50px] min-w-[50px] w-[50px] relative mr-[14px] flex justify-center items-center cursor-pointer ">
                        <div
                            onClick={currentTrack.isPlaying ? onClickPause : onClickPlay}
                            className="absolute inset-0 rounded-md bg-cover transition-brightness duration-500 group-hover:brightness-50"
                            style={{
                                backgroundImage: `url(${currentTrack?.data?.cover_url})`,
                            }}/>
                        {currentTrack.isPlaying ? (
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
                    <button className="hover:scale-105" onClick={onClickNext}>
                        <TbPlayerSkipForwardFilled
                            size={24}
                            className="mr-[11px] text-[#91448E] hover:text-[#F65CF0]"
                        />
                    </button>
                    <div className={"flex flex-col overflow-hidden"}>
                        <p className="text-[14px] sm:text-[16px] font-sans mb-[5px] truncate">{currentTrack?.data?.title}</p>
                        <p className="text-[12px] sm:text-[14px] font-sans truncate">
                            {currentTrack?.data?.artists.map((obj) => obj.name).join(', ')}
                        </p>
                    </div>
                </div>
                <div
                    ref={clickRef}
                    onClick={checkWidth}
                    className="w-full bg-[#676666] h-[5px] cursor-pointer rounded-[30px]"
                >
                    <div style={{
                        transform: `scaleX(${currentTrack.progress}%)`,
                        transition: "all .4s linear 0s"
                    }} className={`origin-left h-[5px] bg-[#F65CF0] rounded-full`}></div>
                </div>
                <div className="flex justify-center items-center ml-[20px]">
                    <p className="mr-[24px] hidden sm:block">{currentTrack?.durationText}</p>
                    <button className="hover:scale-105 hidden sm:block">
                        <HiArrowPathRoundedSquare size={24} color="#F65CF0" className="mr-[24px] "/>
                    </button>
                    <button className="hover:scale-105 ">
                        <FaRegHeart size={24} color="#F65CF0" className="mr-[24px]"/>
                    </button>
                    <button className="hover:scale-105 hidden sm:block">
                        <HiArrowTopRightOnSquare size={24} color="#F65CF0" className="mr-[24px]"/>
                    </button>
                    <button className="hover:scale-105">
                        <HiEllipsisHorizontal size={24} color="#F65CF0"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Player;
