"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const testimonialsData = [
  {
    image: "/images/clients/client1.jpg",
    name: "محمد السيد",
    designation: "المنصورة",
    feedbackText:
      "شعرت بالراحة لأنني لم أضطر للانتظار طويلاً",

    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "/images/clients/client2.jpg",
    name: "شيماء محمد",
    designation: "كفر الشيخ",
    feedbackText:
      "تم إصلاح الغسالة بشكل سريع، وأصبحت تعمل كالجديدة. الخدمة كانت ممتازة",

    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "/images/clients/client3.jpg",
    name: "دعاء ابو طالب",
    designation: "المنصورة",
    feedbackText:
      " كانت الخدمة على مستوى عالٍ ولم أشعر بخيبة أمل",

    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "/images/clients/client4.jpg",
    name: "ليلي شعبان",
    designation: "البحيرة",
    feedbackText:
      " خدمة ما بعد الصيانة ممتازة",

    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
];

const Testimonials: React.FC = () => {
  return (
    <>
      <div className="client-area ptb-100">
        <div className="container">
          <div className="section-title">
        
            <h2>بعض اراء عملاؤنا</h2>
          </div>

          <Swiper
            autoHeight={true}
            spaceBetween={25}
            navigation={true}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="testimonials-slide"
          >
            {testimonialsData &&
              testimonialsData.slice(0, 10).map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="single-client">
                    <i className="quotes flaticon-left-quotes-sign"></i>
                    <p>{value.feedbackText}</p>

                    <ul>
                      {value.rating.map((value, i) => (
                        <li key={i}>
                          <i className={value.iconName}></i>
                        </li>
                      ))}
                    </ul>

                    <div className="client-img">
                     
                      <h3>{value.name}</h3>
                      <span>{value.designation}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
