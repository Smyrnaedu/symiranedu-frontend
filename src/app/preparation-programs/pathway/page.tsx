import React from "react";
import data from "@/helpers/data/tr.json";
import PageHeader from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer";
import SubNavbar from "@/components/pages/common/header/subnavbar";
import ProgramLayoutPreparation from "@/components/pages/preparation-programs/program-layout-preperation";
import { prepationsData } from "@/components/pages/preparation-programs/data/preperation";

const PathwayPage: React.FC = () => {
  const pageHeaderData = data[0]?.PageHeaders || {};
  const title = pageHeaderData["pathwayPageHeader"];
  const imageUrl = pageHeaderData["pathwayHeaderImage"];
  const description = pageHeaderData["buttonLabel"];
  return (
    <>
      <PageHeader
        url={`/image/page-header/${imageUrl}`}
        header={title}
        buttonLabel={description}
      />

      <SubNavbar category="pathway_programs" />
      <Spacer />
      <ProgramLayoutPreparation
        prepationsData={prepationsData.pathway_programs}
      />
    </>
  );
};

export default PathwayPage;
