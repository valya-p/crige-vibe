import Track from './Track';
import {useGetChartsQuery} from '../../redux/services/cringeVibeCore';
import {useSelector} from 'react-redux'

const TrackContainer = () => {
    const limit = 10;
    const offset = 0;
    const {data, isFetching, error} = useGetChartsQuery({ limit, offset });

    const currentTrack = useSelector(state => state.trackSlice)

    return (
        <div className="mb-[42px] w-full xl:w-7/12">
            {/* заголовок */}
            <div className="mb-[42px]">
                <h2 className="font-amaranth text-[24px] text-[#F65CF0] font-{400} capitalize">
                    Chart<span className="text-[#E3D2F8]">Tracks</span>
                </h2>
                <p className="text-[16px] text-[#eae4e4] font-sans font-{400}">Самые популярные треки</p>
            </div>
            {/* карточки */}
            {!isFetching ? data?.map((obj) => (
                <Track track={obj} key={obj.id} currentTrack={currentTrack}/>
            )): [...new Array(8)].map((_, index) => <Track key={index} />)}
        </div>
    );
};

export default TrackContainer;
