import React from 'react';

import largeBanner from '../assets/img/largeBanner.png';
import smallBanner from '../assets/img/smallBanner.png';

const Banner = () => {
  return (
    <div
      style={{
        '--large-banner-url': `url(${largeBanner})`,
        '--small-banner-url': `url(${smallBanner})`,
      }}
      className="mb-[30px] bg-no-repeat bg-center h-[357px] relative bg-[url:var(--small-banner-url)] sm:bg-[url:var(--large-banner-url)] bg-cover">
      <button className="absolute text-[#FFFFFF] text-[20px] font-sans font-semibold bg-dark-purple rounded-[4px] py-[19px] px-[36px] top-[214px] left-[64px] sm:px-[52px] sm:top-[196px] sm:left-[95px] hover:scale-105">
        Перейти в эфир
      </button>
    </div>
  );
};

export default Banner;
