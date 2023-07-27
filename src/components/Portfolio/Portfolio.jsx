import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import spacex from "../../img/spacex.png";
import video from "../../img/video.png";
import cryptocurrency from "../../img/cryptocurrency.png";
import notes from "../../img/notes.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://prasanna-spacex.netlify.app/"><img src={spacex} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://prasannad02.github.io/video-conferencing-website/"><img src={video} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href=" https://prasannad02.github.io/Cryptocurrency/"><img src={cryptocurrency} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://prasannad02.github.io/notes1-app/"><img src={notes} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
