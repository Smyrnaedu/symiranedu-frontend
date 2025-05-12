import React from "react";
import data from "@/helpers/data/tr.json";
import PageHeader from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer";

const LanguageSchools: React.FC = () => {
  const pageHeaderData = data[0]?.PageHeaders || {};
  const title = pageHeaderData["languageSchoolPageHeader"];
  const imageUrl = pageHeaderData["languageSchoolHeaderImage"];
  const description = pageHeaderData["buttonLabel"];
  return (
    <>
      <PageHeader
        url={`/image/page-header/${imageUrl}`}
        header={title}
        buttonLabel={description}
      />
      <Spacer />
    </>
  );
};

export default LanguageSchools;
