import { SectionHeader } from "@/components/common/section-header";
import React from "react";
import data from "@/helpers/data/tr.json" assert { type: "json" };
import { Col, Row } from "react-bootstrap";

interface ProcessType {
  id: number;
  processSteps?: ProcessType[];
  processStepSubtitle?: string;
  processStepTitle?: string;
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
    <section className="container process-wrapper">
      <SectionHeader
        spans={homeData.Home["processTitle"]}
        title={homeData.Home["processSubTitle"]}
      />
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
    </section>
  );
};

export default ProcessSection;
