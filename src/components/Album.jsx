import React from 'react'
import {HiPlay} from 'react-icons/hi2'
import Skeleton from 'react-loading-skeleton'
import { useLazyGetAlbumQuery } from '../redux/services/cringeVibeCore'
import {useDispatch} from 'react-redux'
import { saveTrackIds } from '../redux/slices/trackSlice'
import { trackFetch } from '../redux/services/musicService'

const Album = ({ album }) => {
    const [trigger, {data, isFetching, error}] = useLazyGetAlbumQuery()
    const dispatch = useDispatch()

    React.useEffect(() => {
        const trackIds = data?.tracks.map((obj) => (obj.id))
        if (trackIds) {
            dispatch(saveTrackIds(trackIds))
            dispatch(trackFetch({ trackId: data.tracks[0].id }))
        }
    }, [data, dispatch])

    const onClickPlay = async () => {
        trigger({ albumId: album?.id })
    }

    return (
        <div className="rounded-mb duration-200 mr-[20px] ml-[20px] min-w-0">
            <div className="relative group mb-[2px]">
                {album ? <img src={album.cover_url} alt="картинка" className="rounded shadow-lg w-[200px]"/> : <Skeleton width={200} height={200} highlightColor={'#bdbdbd'}/>}
                <button
                    onClick={onClickPlay}
                    className="absolute left-2 bottom-2 cursor-pointer duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <HiPlay size={32} color="#eae4e4"/>
                </button>
            </div>
            <div className={"flex flex-col overflow-hidden truncate"}>
                <p className="text-[14px] sm:text-[16px] font-sans mb-[1px] truncate">{album ? album.title : <Skeleton highlightColor={'#bdbdbd'}/>}</p>
                <p className="text-[12px] sm:text-[13px] font-sans truncate">
                    {album ? album.artists.map((obj) => obj.name).join(', ') : <Skeleton highlightColor={'#bdbdbd'}/>}
                </p>
            </div>
        </div>
  )
};

export default Album;
