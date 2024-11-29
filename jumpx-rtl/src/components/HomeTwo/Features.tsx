"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "../../../public/images/f1.png";
import logo2 from "../../../public/images/f2.png";
import logo3 from "../../../public/images/f3.png";
// If you have icons or images for other features, import them similarly
// import iconEngineer from "../../../public/images/icon-engineer.png";
// import iconSuccess from "../../../public/images/icon-success.png";

const featuresData = [
  {
    image: logo, // Now this is the correct image import
    title: "مهندسون متميزون",
    shortText:
      "نحن فريق من المهندسين المتخصصين في صيانة الغسالات والثلاجات، نقدم خدمات احترافية لإصلاح الأعطال وضمان استدامة الأجهزة بكفاءة عالية",
    viewDetails: "#",
    aosDelay: "300",
  },
  {
    image: logo2, // Placeholder for icon, you could replace with an actual image or an icon component
    title: "قطع غيار اصلية",
    shortText:
      "نحن نوفر قطع غيار أصلية 100% للثلاجات والغسالات لضمان أداء ممتاز وطويل الأمد لأجهزتك. اختر من مجموعتنا الواسعة من القطع المتوافقة مع جميع الماركات",
    viewDetails: "#",
    aosDelay: "600",
  },
  {
    image: logo3, // Placeholder for icon, you could replace with an actual image or an icon component
    title: "ضمان على الصيانة",
    shortText:
      "نحن نقدم ضمانًا شاملاً على صيانة الثلاجات والغسالات، مما يضمن لك راحة البال وأداء ممتاز بعد كل عملية إصلاح. مع خدماتنا الموثوقة",
    viewDetails: "#",
    aosDelay: "900",
  },
];

const Features: React.FC = () => {
  return (
    <div className="features-area mt-minus-70 pb-70">
      <div className="container">
        <div className="row justify-content-center">
          {featuresData &&
            featuresData.slice(0, 3).map((value, i) => (
              <div
                className="col-lg-4 col-sm-6 p-0"
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay={value.aosDelay}
                key={i}
              >
                <div className="single-features">
                  {/* Check if image is a string (for icons) or an imported image */}
                  {typeof value.image === "string" ? (
                    <span className={value.image}></span> // If it's a string, render it as an icon class
                  ) : (
                    <Image src={value.image} alt={value.title} width={200} height={57} />
                  )}
                  <h3>{value.title}</h3>
                  <p>{value.shortText}</p>

                  <Link href={value.viewDetails} className="read-more-icon">
                    <span className="flaticon-right-arrow"></span>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
