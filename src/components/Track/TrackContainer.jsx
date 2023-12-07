import Track from './Track';
import {useGetChartsQuery} from '../../redux/services/cringeVibeCore';

const TrackContainer = () => {
    const limit = 10;
    const offset = 0;
    const {data, isFetching, error} = useGetChartsQuery({limit, offset});

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
            {data?.map((obj) => (
                <Track track={obj} active={false} key={obj.id}/>
            ))}
        </div>
    );
};

export default TrackContainer;
