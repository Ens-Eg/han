"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import blogImg1 from "../../../public/images/blog/blog1.png";
import blogImg2 from "../../../public/images/blog/blog2.png";
import blogImg3 from "../../../public/images/blog/blog3.png";

const News: React.FC = () => {
  return (
    <>
      <div className="news-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
          
            <h2>جديد الاخبار </h2>
            <p>
             جديد اخبار الشركة والمواضيع الهامة التى نقوم بعرضها على العملاء
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="single-news">
                <div className="blog-img">
                  <Link href="#">
                    <Image
                      src={blogImg1}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>

                  <div className="dates">
                    <span>20 February</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="flaticon-user"></i> الهندسية
                      </Link>
                    </li>
                  
                  </ul>

                  <Link href="#">
                    <h3>أهمية صيانة الغسالات</h3>
                  </Link>

                  <p>
                  تعتبر صيانة الغسالات أمرًا بالغ الأهمية للحفاظ على كفاءتها وإطالة عمرها الافتراضي. مع مرور الوقت، قد تظهر بعض الأعطال مثل ضعف في دوران الحوض، تسرب المياه، أو مشاكل في تدفق الكهرباء
                  </p>

              
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <div className="single-news">
                <div className="blog-img">
                  <Link href="#">
                    <Image
                      src={blogImg2}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>

                  <div className="dates">
                    <span>21 February</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                    <Link href="#">
                        <i className="flaticon-user"></i> الهندسية
                      </Link>
                    </li>
                    
                  </ul>

                  <Link href="#">
                    <h3>استخدام قطع الغيار الأصلية
                    </h3>
                  </Link>

                  <p>
                  تعد قطع الغيار جزءاً أساسياً من أي جهاز أو آلة، فهي العنصر الذي يضمن استمرارية العمل بكفاءة عالية عند حدوث أي عطل أو تلف في الأجزاء الأصلية للجهاز
                  </p>

              
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <div className="single-news">
                <div className="blog-img">
                  <Link href="#">
                    <Image
                      src={blogImg3}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>

                  <div className="dates">
                    <span>22 February</span>
                  </div>
                </div>

                <div className="news-content-wrap">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="flaticon-user"></i> الهندسية
                      </Link>
                    </li>
                 
                  </ul>

                  <Link href="#">
                    <h3> أهمية وأبعاد ضمان الجودة </h3>
                  </Link>

                  <p>
                  تعد الغسالات والثلاجات من الأجهزة المنزلية الأساسية التي نعتمد عليها بشكل يومي في حياتنا اليومية. ومن الطبيعي أن يتعرض أي جهاز كهربائي مع مرور الوقت للاهتراء أو الأعطال نتيجة للاستخدام المستمر
                  </p>

         
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
