import React, {useEffect} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Playlist from './Playlist';

const TrackCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, align: 'center'});

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()); // Access API
        }
    }, [emblaApi]);

    return (
        <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex flex-row">
                <Playlist/>
                <Playlist/>
                <Playlist/>
                <Playlist/>
                <Playlist/>
                <Playlist/>
                <Playlist/>
                <Playlist/>
                <Playlist/>
                <Playlist/>
                <Playlist/>
                <Playlist/>
            </div>
        </div>
    );
};
export default TrackCarousel;
