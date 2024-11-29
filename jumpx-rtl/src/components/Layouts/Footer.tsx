"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../../public/images/white-logo.png";
import shape1 from "../../../public/images/shape/footer-shape-one.png";
import shape2 from "../../../public/images/shape/footer-shape-two.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-top-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <Link href="/" className="logo">
                  <Image src={logo} alt="logo" width={150} height={37} />
                </Link>

                <p>
                تُعد شركة الهندسية لصيانة الثلاجات والغسالات واحدة من الشركات الرائدة في مجال صيانة وإصلاح الأجهزة المنزلية، وخاصة الثلاجات والغسالات، حيث تتميز بتقديم خدمات صيانة ذات جودة عالية واحترافية لعملائها في جميع أنحاء المنطقة
                </p>

           
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <h3>صفحات الموقع</h3>
                <ul>
                  <li>
                    <Link href="/services/service-details/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                     الصفحة الرئيسية
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/service-details/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      شروط الخدمة
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/service-details/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      سياسة الاستخدام
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/service-details/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      الاتصال بنا
                    </Link>
                  </li>
                 
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <h3>أقسام الخدمة</h3>

                <ul>
                  <li>
                    <Link href="/LG">
                      <i className="right-icon bx bx-chevrons-right"></i>
                    صيانة LG
                    </Link>
                  </li>
                  <li>
                    <Link href="/SAMSUNG">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      صيانة  SAMSUNG
                    </Link>
                  </li>
                  <li>
                    <Link href="/BEKO">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      صيانة BEKO
                    </Link>
                  </li>
                  <li>
                    <Link href="/TOSHIBA">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      صيانة Toshiba
                    </Link>
                  </li>
       
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <h3>معلومات الاتصال</h3>

                <ul className="information">
                  <li className="address">
                    <i className="flaticon-call"></i>
                    <span>Phone</span>
                    01143408121<br></br>01005125340
                  </li>

                  <li className="address">
                    <i className="flaticon-envelope"></i>
                    <span>بريد الكتروني</span>
                    info@elhandsyaeg.com
                  </li>

            
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-shape">
          <Image src={shape1} alt="Image" width={270} height={235} />
          <Image src={shape2} alt="Image" width={270} height={235} />
        </div>
      </footer>

      {/* Footer Bottom Area   */}
      <footer className="footer-bottom-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="copy-right">
                <p>جميع الحقوق حفوظة للشركة الهندسية </p>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="privacy">
                <ul>
                  <li>
                    <Link href="/terms">شروط الخدمة</Link>
                  </li>
                  <li>
                    <Link href="/policy">سياسة الاستخدام</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="designed">
                <p>
               
                  <a href="https://ens.eg/" target="_blank">
                    ENSEGYPT
                  </a>   Designed By 
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
