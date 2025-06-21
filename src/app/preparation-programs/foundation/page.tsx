import React from "react";
import data from "@/helpers/data/tr.json";
import PageHeader from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer";
import SubNavbar from "@/components/pages/common/header/subnavbar";
import ProgramLayoutPreparation from "@/components/pages/preparation-programs/program-layout-preperation";
import { prepationsData } from "@/components/pages/preparation-programs/data/preperation";

const FoundationPage: React.FC = () => {
  const pageHeaderData = data[0]?.PageHeaders || {};
  const title = pageHeaderData["foundationPageHeader"];
  const imageUrl = pageHeaderData["foundationHeaderImage"];
  const description = pageHeaderData["buttonLabel"];
  return (
    <>
      <PageHeader
        url={`/image/page-header/${imageUrl}`}
        header={title}
        buttonLabel={description}
      />
      <SubNavbar category="foundation_programs" />
      <Spacer />
      <ProgramLayoutPreparation
        prepationsData={prepationsData.foundation_programs}
      />
    </>
  );
};

export default FoundationPage;
