import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardData from "./CardData";

const MySlider = ({ mockData }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <Slider {...settings}>
            {mockData.map((item, index) => (
                <div className={"w-full"} key={index}>
                    <CardData item={item} />
                </div>
            ))}
        </Slider>
    );
};

export default MySlider;
