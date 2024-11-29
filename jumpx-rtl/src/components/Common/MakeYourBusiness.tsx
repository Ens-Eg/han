"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import b1 from "../../../public/images/b1.png";
import b2 from "../../../public/images/b2.png";
import b3 from "../../../public/images/b3.png";
import b4 from "../../../public/images/b4.png";
const MakeYourBusiness: React.FC = () => {
  return (
    <>
      <div className="business-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="business-content">
                <h2>نضمن لك افضل صيانة للاجهزتك المنزلية</h2>
              </div>

              <div className="single-business">
                <i className="flaticon-chip"></i>
                <h3>سرعة استجابة</h3>
                <p>
                  فقط اتصل بنا الان نصلك اينما كنت من خلال فريق متخصص من المهندسين المتخصيين فى صيانة الاجهزة المنزلية وتوفير قطع الغيار الاصلية وحل جميع المشكلات للاجهزة الكهربائية
                </p>
              </div>

              <div className="single-business">
                <i className="flaticon-blockchain"></i>
                <h3>ضمان ما بعد الصيانة</h3>
                <p>
                 نقوم بتوفير ضمان لمدة عام على قطع غيار الصيانة الخاصة بنا حيث اننا نقوم بتوفير قطع الغيار الاصلية حتي نضمن لك اطول فترة عمر للاجهزة الكهربائية الخاصة بك
                </p>
              </div>

              <div className="business-btn">
                <Link href="tel:+201005125340" className="default-btn">
                  إتصل بنا
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div 
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <div className="single-counter">
                    <h2>
                    <Image src={b1} alt="logo" width={114} height={95} />
                    </h2>
                    <p>إتصل بنا</p>
                  </div>
                </div>

                <div 
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <div className="single-counter">
                    <h2>
                    <Image src={b2} alt="logo" width={114} height={95} />
                    </h2>
                    <p>نصلك فورا</p>
                  </div>
                </div>

                <div 
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  <div className="single-counter">
                    <h2>
                    <Image src={b3} alt="logo" width={114} height={95} />
                    </h2>
                    <p>نقوم بالصيانة</p>
                  </div>
                </div>

                <div 
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="400"
                >
                  <div className="single-counter">
                    <h2>
                    <Image src={b4} alt="logo" width={114} height={95} />
                    </h2>
                    <p>ضمان قطع الغيار</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeYourBusiness;
