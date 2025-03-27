import { Spacer } from "@/components/common/spacer";
import Banner from "@/components/home/banner/banner";
import BlogSection from "@/components/home/blog/blog";
import Accordions from "@/components/home/faq/accordions";
import ProcessSection from "@/components/home/process/process";
import Sliders from "@/components/home/swiper/sliders";
import UniversityPartners from "@/components/home/university-partners/uni-cards";
import WhatssappContact from "@/components/home/whatsapp-contact/whatsapp-contact";




export default function Home() {
  return (
    <>
      <Banner />
      <Spacer />
      <Sliders/>
      <Spacer/>
      <ProcessSection/>
      <Spacer/>
      <UniversityPartners/>
      <Spacer/>
      <BlogSection/>
      <Spacer/>
      <Accordions/>
      <Spacer/>
      <WhatssappContact/>
    </>
  );
}
