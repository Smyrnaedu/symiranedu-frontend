import React from "react";
import data from "@/helpers/data/tr.json";
import PageHeader from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer";
import { programsData } from "@/components/pages/academic-program-pages/data/programs";
import ProgramLayout from "@/components/pages/academic-program-pages/program-layout";
import SubNavbar from "@/components/pages/common/header/subnavbar";

const OnlineUniversityPage: React.FC = () => {
  const pageHeaderData = data[0]?.PageHeaders || {};
  const title = pageHeaderData["onlineUniversityPageHeader"];
  const imageUrl = pageHeaderData["onlineUniversityHeaderImage"];
  const description = pageHeaderData["buttonLabel"];
  return (
    <>
      <PageHeader
        url={`/image/page-header/${imageUrl}`}
        header={title}
        buttonLabel={description}
      />
      <SubNavbar category="online-university" />
      <Spacer />
      <ProgramLayout programData={programsData.onlineUniversity} />;
    </>
  );
};

export default OnlineUniversityPage;
