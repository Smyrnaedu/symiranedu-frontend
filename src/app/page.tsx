import { Spacer } from "@/components/common/spacer";
import Banner from "@/components/home/banner/banner";
import Sliders from "@/components/home/swiper/sliders";

import Students from "@/components/home/swiper/students";
import { Container } from "react-bootstrap";


export default function Home() {
  return (
    <>
      <Banner />
      <Spacer />
      <Students />
      <Spacer />
      <Sliders/>
    </>
  );
}
