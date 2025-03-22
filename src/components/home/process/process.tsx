import { SectionHeader } from "@/components/common/section-header";
import React from "react";
import data from "@/helpers/data/tr.json" assert { type: "json" };
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
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

  return (
    <section className="container-fluid process-wrapper ">
      <div className="container">
        <SectionHeader
          spans={homeData.Home["processTitle"]}
          title={homeData.Home["processSubTitle"]}
        />
      </div>
      <section className="process-section">
        {universityPartners.map((step, index) => (
          <Row
            key={step.id || index}
            className={`align-items-center py-4  ${
              index % 2 === 0 ? "bg-light" : "bg-white"
            }`}
            sm={1}
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
