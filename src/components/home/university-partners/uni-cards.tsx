"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import data from "@/helpers/data/tr.json" assert { type: "json" };
import "./uni-cards.scss";
import { Col, Row } from "react-bootstrap";
import { SectionHeader } from "@/components/common/section-header";
import Image from "next/image";
import { useEffect, useState } from "react";

interface UniversityType {
  id: number;
  universityPartnerName?: string;
  universityPartnerImage?: string;
}

interface HomeData {
  Home: {
    universityPartners: UniversityType[];
    universityPartnersTitle: string;
    universityPartnersSubtitle: string;
  };
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: index * 0.1 },
  }),
};

const UniversityPartners = () => {
  const homeData: HomeData = data[0] as unknown as HomeData;
  const universityPartners: UniversityType[] = homeData?.Home?.universityPartners || [];
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // **Ekran genişliğine göre slider mı yoksa row mu göstereceğimizi belirler**
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // İlk render'da kontrol et
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // **Slider Ayarları**
  const sliderSettings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div ref={ref} className="container university-patners mt-5">
      <SectionHeader spans={homeData.Home.universityPartnersTitle} title={homeData.Home.universityPartnersSubtitle} />

      {/* 📌 Ekran genişliğine göre Row veya Slider */}
      {!isMobile ? (
        <Row>
          {universityPartners.map((item) => (
            <Col key={item.id} sm xl={2} lg={3} className="mb-3 university-col">
              <motion.div
                className="p-4 motion-div"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={cardVariants}
                custom={item.id}
                whileHover={{ scale: 1.2 }}
              >
                <div className="image-wrapper">
                  <Image
                    src={`/image/university-logos/${item.universityPartnerImage || "default-image.png"}`}
                    width={100}
                    height={100}
                    alt={item.universityPartnerName || "University logo"}
                    className="university-logo"
                  />
                </div>
                <h6>{item.universityPartnerName}</h6>
              </motion.div>
            </Col>
          ))}
        </Row>
      ) : (
        <Slider {...sliderSettings} className="university-slider">
          {universityPartners.map((item) => (
            <div key={item.id} className="slider-item">
              <motion.div
                className="p-4 motion-div"
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                custom={item.id}
                whileHover={{ scale: 1.1 }}
              >
                <div className="image-wrapper">
                  <Image
                    src={`/image/university-logos/${item.universityPartnerImage || "default-image.png"}`}
                    width={100}
                    height={100}
                    alt={item.universityPartnerName || "University logo"}
                    className="university-logo"
                  />
                </div>
                <h6 className="text-center">{item.universityPartnerName}</h6>
              </motion.div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default UniversityPartners;
