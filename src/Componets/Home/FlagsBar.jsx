import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Flags } from "../../Data/FlagsData";

function FlagsBar() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <Slider {...settings} className="w-full h-[125px] mt-5 overflow-hidden">
      {Flags.map((item) => (
        <div key={item.name}>
          <img
            src={item.image}
            alt={`Flag of ${item.name}`}
            className="w-[205px] h-[125px] object-cover mb-2 border"
          />
          <div className="ml-16">
            <p>{item.name}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default FlagsBar;
