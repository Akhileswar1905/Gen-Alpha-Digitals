"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import styles from "./styles.module.css";
import Image from "next/image";

const images = [
  "/projects/project1.jpg",
  "/projects/project2.jpg",
  "/projects/project3.jpg",
  "/projects/project4.jpg",
  "/projects/project5.jpg",
  "/projects/project6.jpg",
  "/projects/project7.jpg",
];

const Projects = () => {
  return (
    <div className={styles.container}>
      <h1>See Our Works</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <Image src={img} alt={`slide_image_${i}`} fill className="img" />
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <IoArrowBackOutline></IoArrowBackOutline>
          </div>
          <div className="swiper-button-next slider-arrow">
            <IoArrowForwardOutline></IoArrowForwardOutline>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Projects;
