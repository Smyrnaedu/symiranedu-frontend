import { Spacer } from "@/components/common/spacer";
import Banner from "@/components/home/banner/banner";

import Students from "@/components/home/swiper/swipers";
import { Container } from "react-bootstrap";


export default function Home() {
  return (
    <>
      <Banner />
      <Spacer />
      <Students />
      <Spacer />
    </>
  );
}
