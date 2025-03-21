"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import data from "@/helpers/data/tr.json" assert { type: "json" };
import "./uni-cards.scss"
import { Col, Row } from "react-bootstrap";
import { SectionHeader } from "@/components/common/section-header";
import Image from "next/image";

interface UniversityType {
    id: number;
    universityPartnerName?: string;
    universityPartnerImage?: string;
  }

interface HomeData {
    Home: {
        universityPartners: UniversityType[];
      "universityPartnersTitle": string;
      "universityPartnersSubtitle": string;
    };
  }

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: index * 0.1 }, // Kartlar sırayla hareket edecek
  }),
};

const UniversityPartners = () => {
    const homeData: HomeData = data[0] as unknown as HomeData;
    const universityPartners: UniversityType[] = homeData?.Home?.universityPartners || [];
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="container university-patners mt-5">
      <SectionHeader
        spans={homeData.Home["universityPartnersTitle"]}
        title={homeData.Home["universityPartnersSubtitle"]}
      />
      <Row>
        {universityPartners.map((item) => (
          <Col key={item.id} xl={2} lg={3} className="mb-3 university-col">
            <motion.div
              className="p-4 motion-div"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              custom={item.id}
              whileHover={{ scale: 1.2 }}
            >
              <div className="image-wrapper">
              <Image src={`/image/university-logos/${item.universityPartnerImage || "default-image.png"}`} width={100} height={100} alt={item.universityPartnerName || "University logo"} className="university-logo"/>
              </div>
              <h6>
                {item.universityPartnerName}
              </h6>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UniversityPartners;
