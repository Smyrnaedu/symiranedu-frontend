import React from "react";
import data from "@/helpers/data/tr.json";
import PageHeader from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer";

const AboutUsPage: React.FC = () => {
  const pageHeaderData = data[0]?.PageHeaders || {};
  const title = pageHeaderData["aboutPageHeader"];
  const imageUrl = pageHeaderData["aboutHeaderImage"];
  const buttonLabel= pageHeaderData["buttonLabel"];
  return (
    <>
      <PageHeader url={`/image/page-header/${imageUrl}`} header={title} buttonLabel={buttonLabel} />
      <Spacer />
    </>
  );
};

export default AboutUsPage;
