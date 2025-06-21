import React from "react";
import data from "@/helpers/data/tr.json";
import PageHeader from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer";
import ProgramLayoutPreparation from "@/components/pages/preparation-programs/program-layout-preperation";
import { prepationsData } from "@/components/pages/preparation-programs/data/preperation";
import SubNavbar from "@/components/pages/common/header/subnavbar";
const WorkAndStudyPage: React.FC = () => {
  const pageHeaderData = data[0]?.PageHeaders || {};
  const title = pageHeaderData["workAndStudyPageHeader"];
  const imageUrl = pageHeaderData["workAndStudyHeaderImage"];
  const description = pageHeaderData["buttonLabel"];
  
  return (
    <>
      <PageHeader
        url={`/image/page-header/${imageUrl}`}
        header={title}
        buttonLabel={description}
      />
      <SubNavbar category="work_and_study" />
      <Spacer />
      <ProgramLayoutPreparation
        prepationsData={prepationsData.work_and_study}
      />
    </>
  );
};

export default WorkAndStudyPage;
