import {HiPlay} from 'react-icons/hi2'
import Skeleton from 'react-loading-skeleton'

const Album = ({ album }) => {
  return (
    <div className="rounded-mb duration-200 mr-[20px] ml-[20px] min-w-0">
        <div className="relative group mb-[2px]">
            {album ? <img src={album.cover_url} alt="картинка" className="rounded shadow-lg w-[200px]"/> : <Skeleton width={200} height={200} highlightColor={'#bdbdbd'}/>}
            <button
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
