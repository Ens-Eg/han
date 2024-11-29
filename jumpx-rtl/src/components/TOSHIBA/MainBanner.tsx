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
              style={{ backgroundImage: `url(/images/TOSHIBA/slider1.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text jumpx-slider-textblack2 overflow-hidden one">
                     
                      <h1>صيانة متخصصة لجميع أجهزة TOSHIBA</h1>
                      <p>
                      نقدم صيانة متخصصة لجميع أجهزة TOSHIBA، بما في ذلك الثلاجات، الغسالات، التلفزيونات، والمكيفات، مع فحص شامل للأعطال، إصلاحها باستخدام قطع غيار أصلية، وضمان عودة الأجهزة للعمل بكفاءة عالية وأداء مستدام</p>                      <div className="slider-btn">
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
              style={{ backgroundImage: `url(/images/TOSHIBA/slider2.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text jumpx-slider-textblack overflow-hidden two">
                      
                      <h1>صيانة غسالات TOSHIBA</h1>
                      <p>
                      تتضمن صيانة غسالات TOSHIBA فحص شامل للأعطال مثل تسريب المياه أو توقف التشغيل، مع تنظيف الأجزاء الداخلية، استبدال القطع التالفة، وضبط الأداء لضمان عمل الغسالة بكفاءة عالية وطول عمر افتراضي                 </p>

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
              style={{ backgroundImage: `url(/images/TOSHIBA/slider3.jpg)` }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="jumpx-slider-text jumpx-slider-textblack2 overflow-hidden three">
                   
                      <h1>صيانة متكاملة لتكييفات TOSHIBA</h1>
                      <p>
                      نقدم صيانة متكاملة لتكييفات TOSHIBA تشمل فحص دقيق للأنظمة الداخلية، تنظيف الفلاتر والمبادل الحراري، فحص مستوى الفريون، وضبط أداء التبريد لضمان تشغيل سلس وكفاءة عالية للطاقة طوال فترة استخدام الجهاز                  </p>

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
