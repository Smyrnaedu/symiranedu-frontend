import { Spacer } from "@/components/common/spacer";
import Banner from "@/components/home/banner/banner";
import Accordions from "@/components/home/faq/accordions";
import Sliders from "@/components/home/swiper/sliders";




export default function Home() {
  return (
    <>
      <Banner />
      <Spacer />
      <Sliders/>
      <Spacer height={90}/>
      <Accordions/>
      <Spacer/>
    </>
  );
}
