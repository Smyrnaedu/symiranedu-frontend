"use client";

import { SectionHeader } from "@/components/common/section-header";
import React, { useEffect, useRef, useState } from "react";
import data from "@/helpers/data/tr.json" assert { type: "json" };
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import { FaPlane } from "react-icons/fa";
import "./process.scss";

interface ProcessType {
  id: number;
  processStepTitle?: string;
  processStepSubtitle?: string;
  processStepDescription?: string;
  processStepImage?: string;
}

interface HomeData {
  Home: {
    processSteps: ProcessType[];
    processTitle: string;
    processSubTitle: string;
  };
}

const ProcessSection: React.FC = () => {
  const homeData: HomeData = data[0] as unknown as HomeData;
  const universityPartners: ProcessType[] = homeData?.Home?.processSteps || [];

  const sectionRef = useRef<HTMLElement | null>(null); // ✏️ Artık section etiketine bağlayacağız
  const [scrollOffset, setScrollOffset] = useState(0);
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      const screenCenter = window.innerHeight / 2;

      if (sectionTop < window.innerHeight && rect.bottom > 0) {
        setShowLine(true);

        const scrollInSection = Math.min(
          Math.max(screenCenter - sectionTop, 0),
          sectionHeight
        );

        setScrollOffset(scrollInSection);
      } else {
        setShowLine(false);
        setScrollOffset(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="container-fluid process-wrapper">
      <div className="container">
        <SectionHeader
          spans={homeData.Home["processTitle"]}
          title={homeData.Home["processSubTitle"]}
        />
      </div>

      <section className="process-section" ref={sectionRef}>
        {showLine && (
          <div className="scroll-visuals">
            <div
              className="scroll-line-inside"
              style={{ height: `${scrollOffset}px` }}
            />
            <div
              className="scroll-plane-inside"
              style={{ top: `${scrollOffset - 12}px` }}
            >
              <FaPlane className="middle-plane"/>
            </div>
          </div>
        )}

        {universityPartners.map((step, index) => (
          <Row
            key={step.id || index}
            className={`align-items-center py-4  ${
              index % 2 === 0 ? "bg-light" : "bg-white"
            }`}
            xs={1}
            md={2}
          >
            {index % 2 === 0 ? (
              <>
                <Col>
                  <Image
                    src={`/image/process/${step.processStepImage}`}
                    alt={step.processStepTitle || "Process Image"}
                    width={500}
                    height={500}
                    className="img-fluid object-cover"
                  />
                </Col>
                <Col>
                  <div className="card-text-wrapper">
                    <span className="process-subtitle">
                      <span className="subtitle-point"></span>
                      {step.processStepSubtitle}
                    </span>
                    <h3>{step.processStepTitle}</h3>
                    <p>{step.processStepDescription}</p>
                  </div>
                </Col>
              </>
            ) : (
              <>
                <Col>
                  <div className="card-text-wrapper">
                    <span className="process-subtitle">
                      <span className="subtitle-point"></span>
                      {step.processStepSubtitle}
                    </span>
                    <h3>{step.processStepTitle}</h3>
                    <p>{step.processStepDescription}</p>
                  </div>
                </Col>
                <Col>
                  <Image
                    src={`/image/process/${step.processStepImage}`}
                    alt={step.processStepTitle || "Process Image"}
                    width={500}
                    height={500}
                    className="img-fluid object-cover"
                  />
                </Col>
              </>
            )}
          </Row>
        ))}
      </section>
    </section>
  );
};

export default ProcessSection;