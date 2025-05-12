import PageHeader from "@/components/common/page-header/page-header";
import React from "react";
import data from "@/helpers/data/tr.json";
import { Spacer } from "@/components/common/spacer";

const DoctoratePage: React.FC = () => {
  const pageHeaderData = data[0]?.PageHeaders || {};
  const title = pageHeaderData["doctoratePageHeader"];
  const imageUrl = pageHeaderData["doctorateHeaderImage"];
  return (
    <>
      <PageHeader url={`/image/page-header/${imageUrl}`} header={title} />
      <Spacer />
    </>
  );
};

export default DoctoratePage;
