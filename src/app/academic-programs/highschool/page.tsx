import PageHeader from "@/components/common/page-header/page-header";
import React from "react";
import data from "@/helpers/data/tr.json";
import { Spacer } from "@/components/common/spacer";

const HighschoolPage: React.FC = () => {
  const pageHeaderData = data[0]?.PageHeaders || {};
  const title = pageHeaderData["highschoolPageHeader"];
  const imageUrl = pageHeaderData["highschoolHeaderImage"];
  return (
    <>
      <PageHeader url={`/image/page-header/${imageUrl}`} header={title} />
      <Spacer />
    </>
  );
};

export default HighschoolPage;
