"use client";
import React from "react";
import Accordion from "react-bootstrap/Accordion";

import data from "@/helpers/data/tr.json" assert { type: "json" };
import AccordionItem from "./accordion-item";
import { Container } from "react-bootstrap";
import { SectionHeader } from "@/components/common/section-header";


interface SssItem {
  "sss-sub-title": string;
  "sss-description": string;
  "sss-list"?: { "li-text": string }[];
}



const Accordions: React.FC = () => {
  const homeData = data[0]?.Home;
  const sssData: SssItem[] = homeData?.sss[0]?.["sss-text"] || [];
  const sssTitle =homeData?.sss[0]?.["sss-main-title"]; // Başlık kısmı

  return (
    <Container>
      <SectionHeader title="sss" spans={sssTitle}/>
      <Accordion defaultActiveKey="0">
        {sssData.map((item, index) => (
          <AccordionItem
            key={index}
            eventKey={index.toString()}
            title={item["sss-sub-title"]}
            description={item["sss-description"]}
            list={item["sss-list"]}
          />
        ))}
      </Accordion>
    </Container>
  );
};

export default Accordions;