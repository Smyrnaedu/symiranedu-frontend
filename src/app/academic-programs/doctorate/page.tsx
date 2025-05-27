import PageHeader from "@/components/common/page-header/page-header";
import React from "react";
import data from "@/helpers/data/tr.json";
import { Spacer } from "@/components/common/spacer";
import { programsData } from "@/data/programs";
import ProgramLayout from "@/components/pages/academic-program-pages/program-layout";
import SubNavbar from "@/components/pages/common/header/subnavbar";

const DoctoratePage: React.FC = () => {
  const pageHeaderData = data[0]?.PageHeaders || {};
  const title = pageHeaderData["doctoratePageHeader"];
  const imageUrl = pageHeaderData["doctorateHeaderImage"];
  const description = pageHeaderData["buttonLabel"];

  return (
    <>
      <PageHeader
        url={`/image/page-header/${imageUrl}`}
        header={title}
        buttonLabel={description}
      />
      <SubNavbar category="doctorate" />
      <Spacer />
      <ProgramLayout programData={programsData.doctorate} />;
    </>
  );
};

export default DoctoratePage;
