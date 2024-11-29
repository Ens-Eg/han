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
              style={{ backgroundImage: `url(/images/SAMSUNG/slider1.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text overflow-hidden one">
                     
                      <h1>صيانة متخصصة لجميع أجهزة SAMSUNG</h1>
                      <p>
                      نقدم صيانة متخصصة لجميع أجهزة SAMSUNG، بما في ذلك الهواتف الذكية، التليفزيونات، الثلاجات، والغسالات، مع فحص شامل للأعطال، استبدال القطع الأصلية، وضمان أفضل أداء للأجهزة عبر خدمات فنية عالية الجودة</p>                      <div className="slider-btn">
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
              style={{ backgroundImage: `url(/images/SAMSUNG/slider2.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text jumpx-slider-textblack overflow-hidden two">
                      
                      <h1>صيانة غسالات SAMSUNG</h1>
                      <p>
                      فحص الأجهزة بدقة للتأكد من كفاءة الأداء، مع إصلاح الأعطال الشائعة مثل تسريب المياه، توقف التشغيل، أو مشاكل في الدورات                      </p>

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
              style={{ backgroundImage: `url(/images/SAMSUNG/slider3.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text jumpx-slider-textblack2 overflow-hidden three">
                   
                      <h1>صيانة متكاملة لتكييفات SAMSUNG</h1>
                      <p>
                      فحص شامل لجميع الأجزاء، تنظيف الفلاتر والمبادل الحراري، فحص مستوى الفريون، وضبط درجة التبريد لضمان أقصى كفاءة وأداء طويل الأمد للجهاز                      </p>

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
