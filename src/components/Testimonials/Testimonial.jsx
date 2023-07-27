import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import oasisinfobyte1 from "../../img/oasisinfobyte1.png";
import sync from "../../img/sync.png";
import solarsecure from "../../img/solarsecure.png";
import codealpha from "../../img/codealpha.png";

const Testimonial = () => {
  const clients = [
    {
      img: oasisinfobyte1,
      review:
      "Congratulations Prasanna for completing  web development internship at Oasis Infobyte! your outstanding work on the pizza delivery application showcases your dedication, technical prowess, and attention to detail. We are confident they will excel in their future endeavors. Best wishes for a bright future!",
    },


    {
      img: sync,
      review:
      "Congratulations Prasanna for completing  web development internship at Sync Intern! your outstanding work on the ID Card Generator application showcases your dedication, technical prowess, and attention to detail. We are confident they will excel in their future endeavors. Best wishes for a bright future!",

    },
    {
      img: solarsecure,
      review:
      "Congratulations Prasanna for completing  web development internship at Solar Secure System! your outstanding work on the Full stack blog application showcases your dedication, technical prowess, and attention to detail. We are confident they will excel in their future endeavors. Best wishes for a bright future!",

    },
    {
      img: codealpha,
      review:
      "Congratulations Prasanna for completing  web development internship at Codealpha! your outstanding work on the Banking application showcases your dedication, technical prowess, and attention to detail. We are confident they will excel in their future endeavors. Best wishes for a bright future!",

    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
