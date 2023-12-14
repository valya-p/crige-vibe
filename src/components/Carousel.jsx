import Carousel from "react-multi-carousel"
import Album from "./Album.jsx"

import {useGetNewReleasesQuery} from '../redux/services/cringeVibeCore'

const AlbumCarousel = () => {

    const limit = 10;
    const offset = 0;
    const {data, isFetching, error} = useGetNewReleasesQuery({ limit, offset });

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 2140 },
            items: 6
        },
        largeDesktop: {
            breakpoint: { max: 2140, min: 1900 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1900, min: 1378 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1378, min: 880 },
            items: 3
        },
        largeMobile: {
            breakpoint: { max: 880, min: 535 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 535, min: 0 },
            items: 1
        }
    };

  return (
    <div className="mb-[60px]">
        <div className="mb-[40px]">
            <h2 className="font-amaranth text-[24px] text-[#F65CF0] font-{400} capitalize">
                New<span className="text-[#E3D2F8]">Releases</span>
            </h2>
            <p className="text-[16px] text-[#eae4e4] font-sans font-{400}">Самые популярные фльбомы</p>
        </div>
        {
            <Carousel
            responsive={responsive}
            infinite={true}
            centerMode={true}
            autoPlay={false}
            autoPlaySpeed={5000}
            itemClass={'min-[400px]:flex min-[400px]:justify-center'}
            >
            {!isFetching ? data?.map((obj) => (
                <Album album={obj} key={obj.id}/>
            )): [...new Array(8)].map((_, index) => <Album key={index} />)}
        </Carousel>
        }
    </div>
  )
}

export default AlbumCarousel;
