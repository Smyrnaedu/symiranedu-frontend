import React from "react";
import data from "@/helpers/data/tr.json";
import PageHeader from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer";

const FoundationPage: React.FC = () => {
  const pageHeaderData = data[0]?.PageHeaders || {};
  const title = pageHeaderData["foundationPageHeader"];
  const imageUrl = pageHeaderData["foundationHeaderImage"];
  return (
    <>
      <PageHeader url={`/image/page-header/${imageUrl}`} header={title} />
      <Spacer />
    </>
  );
};

export default FoundationPage;
