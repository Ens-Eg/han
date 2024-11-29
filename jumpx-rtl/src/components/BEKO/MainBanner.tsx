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
              style={{ backgroundImage: `url(/images/BEKO/slider1.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text overflow-hidden one">
                     
                      <h1>صيانة متخصصة لجميع أجهزة BEKO</h1>
                      <p>
                      نقدم صيانة متخصصة لجميع أجهزة BEKO، بما في ذلك الثلاجات، الغسالات، التكييفات، والمواقد، مع تقديم خدمات فحص دقيقة، إصلاح الأعطال، واستبدال القطع الأصلية لضمان أداء ممتاز وطويل الأمد لجميع أجهزتك                      </p>                      <div className="slider-btn">
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
              style={{ backgroundImage: `url(/images/BEKO/slider2.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text jumpx-slider-textblack overflow-hidden two">
                      
                      <h1>صيانة غسالات BEKO</h1>
                      <p>
                      تتضمن صيانة غسالات BEKO فحص شامل للأجهزة، إصلاح الأعطال الشائعة مثل توقف الدوران أو تسريب المياه، وتنظيف الأجزاء الداخلية لضمان أداء مثالي، مع استخدام قطع غيار أصلية لضمان كفاءة الجهاز واستمراريته                   </p>

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
              style={{ backgroundImage: `url(/images/BEKO/slider3.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text jumpx-slider-textblack2 overflow-hidden three">
                   
                      <h1>صيانة متكاملة لتكييفات BEKO</h1>
                      <p>
                      تتضمن صيانة غسالات BEKO فحص شامل للأجهزة، إصلاح الأعطال الشائعة مثل توقف الدوران أو تسريب المياه، وتنظيف الأجزاء الداخلية لضمان أداء مثالي، مع استخدام قطع غيار أصلية لضمان كفاءة الجهاز واستمراريته                           </p>

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
