"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="slider-area">
        <Swiper
          autoHeight={true}
          navigation={true}
          autoplay={{
            delay: 6500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          modules={[Navigation, Autoplay]}
          className="hero-swiper"
        >
          <SwiperSlide>
            <div
              className="jumpx-slider-item"
              style={{ backgroundImage: `url(/images/LG/slider1.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text overflow-hidden one">
                     
                      <h1>صيانة متخصصة لجميع أجهزة LG</h1>
                      <p>
                      خدمات فنية متخصصة لضمان أداء الأجهزة بكفاءة عالية، سواء كانت أجهزة منزلية مثل الثلاجات والغسالات أو إلكترونيات مثل التلفزيونات
</p>                      <div className="slider-btn">
                        <Link href="tel:+201005125340" className="default-btn active">
                         إتصل بنا الان
                        </Link>

                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="jumpx-slider-item"
              style={{ backgroundImage: `url(/images/LG/slider2.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text jumpx-slider-textblack overflow-hidden two">
                      
                      <h1>صيانة غسالات LG</h1>
                      <p>
                      فحص الأجهزة بدقة لتحديد الأعطال المحتملة مثل تسريب المياه أو توقف التشغيل، مع استبدال القطع التالفة وتنظيف الأجزاء الداخلية لضمان كفاءة الغسالة وعملها بشكل مثالي
                      </p>

                      <div className="slider-btn">
                      <Link href="tel:+201005125340" className="default-btn active">
                         إتصل بنا الان
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="jumpx-slider-item"
              style={{ backgroundImage: `url(/images/LG/slider3.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text jumpx-slider-textblack2 overflow-hidden three">
                   
                      <h1>صيانة متكاملة لتكييفات LG</h1>
                      <p>
                      تتضمن صيانة تكييفات LG فحص الأنظمة الداخلية، تنظيف الفلاتر والمبادل الحراري، وتقييم مستوى التبريد لضمان كفاءة الأداء. كما تشمل فحص الوحدة الخارجية وتنظيفها
                      </p>

                      <div className="slider-btn">
                      <Link href="tel:+201005125340" className="default-btn active">
                         إتصل بنا الان
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default MainBanner;
