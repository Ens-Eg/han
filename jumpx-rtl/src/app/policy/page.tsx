import React from "react";
import Navbar from "../../components/Layouts/pageNavbar";
import MainBanner from "../../components/HomeFive/MainBanner";
import Features from "../../components/HomeTwo/Features";
import About from "../../components/HomeFive/About";
import WhyChooseUs from "../../components/HomeFive/WhyChooseUs";
import Services from "../../components/HomeFive/Services";
import MakeYourBusiness from "../../components/Common/MakeYourBusiness";
import WhatWeOffer from "../../components/HomeFive/WhatWeOffer";
import Newsletter from "../../components/Common/Newsletter";
import Testimonials from "../../components/Common/Testimonials";
import Faq from "../../components/HomeFive/Faq";
import News from "../../components/Common/News";
import Footer from "../../components/Layouts/Footer";
import Terms from "../../components/policy/terms"

export default function Page() {
  return (
    <>
      <Navbar />

      <Terms />
      <Faq />

      <News />

      <Footer />
    </>
  );
}
