import React from "react";
import data from "@/helpers/data/tr.json";
import PageHeader from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer";

const UndergraduatePage: React.FC = () => {
  const pageHeaderData = data[0]?.PageHeaders || {};
  const title = pageHeaderData["undergraduatePageHeader"];
  const imageUrl = pageHeaderData["undergraduateHeaderImage"];
  return (
    <>
      <PageHeader url={`/image/page-header/${imageUrl}`} header={title} />
      <Spacer />
    </>
  );
};

export default UndergraduatePage;