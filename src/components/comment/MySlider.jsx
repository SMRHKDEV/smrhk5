"use client"

import { Box } from "@mui/material";
import Slider from "react-slick";
import SliderItem from "./SliderItem";

export default function MySlider() {
    var settings = {
        rtl: true,
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    };
    return (
        <Box component={'div'}>
            <div className="comment-slider">
                <Slider {...settings}>
                    <SliderItem name={'میلاد کریمی'} subTitle={'محصول آرایشی و بهداشتی'} txt={'لورم ایپسوم متن ساختگی با توله از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که آینده شناخت فراوان جامعه'} />
                    <SliderItem name={'رضا حیدری'} subTitle={'محصول آرایشی و بهداشتی'} txt={'لورم ایپسوم متن ساختگی با توله از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که آینده شناخت فراوان جامعه'} />
                    <SliderItem name={'امید کشوری'} subTitle={'محصول آرایشی و بهداشتی'} txt={'لورم ایپسوم متن ساختگی با توله از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که آینده شناخت فراوان جامعه'} />
                    <SliderItem name={'مهدی پاشا'} subTitle={'محصول آرایشی و بهداشتی'} txt={'لورم ایپسوم متن ساختگی با توله از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که آینده شناخت فراوان جامعه'} />
                    <SliderItem name={'مریم جلالی'} subTitle={'محصول آرایشی و بهداشتی'} txt={'لورم ایپسوم متن ساختگی با توله از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که آینده شناخت فراوان جامعه'} />
                    <SliderItem name={'زهرا حضرتی'} subTitle={'محصول آرایشی و بهداشتی'} txt={'لورم ایپسوم متن ساختگی با توله از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که آینده شناخت فراوان جامعه'} />
                </Slider>
            </div>
        </Box>
    )
}