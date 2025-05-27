import PageHeader from "@/components/common/page-header/page-header";
import React from "react";
import data from "@/helpers/data/tr.json";
import { Spacer } from "@/components/common/spacer";
import { programsData } from "@/components/pages/academic-program-pages/data/programs";
import ProgramLayout from "@/components/pages/academic-program-pages/program-layout";

const HighschoolPage: React.FC = () => {
  const pageHeaderData = data[0]?.PageHeaders || {};
  const title = pageHeaderData["highschoolPageHeader"];
  const imageUrl = pageHeaderData["highschoolHeaderImage"];
  const description = pageHeaderData["buttonLabel"];

  return (
    <>
      <PageHeader
        url={`/image/page-header/${imageUrl}`}
        header={title}
        buttonLabel={description}
      />
      <Spacer />
      <ProgramLayout programData={programsData.highSchool} />;
    </>
  );
};

export default HighschoolPage;
