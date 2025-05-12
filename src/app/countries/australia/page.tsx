import React from "react";
import data from "@/helpers/data/tr.json";
import PageHeader from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer";

const CountriesAustraliaPage: React.FC = () => {
  const pageHeaderData = data[0]?.PageHeaders || {};
  const title = pageHeaderData["australiaPageHeader"];
  const imageUrl = pageHeaderData["australiaHeaderImage"];
  const description = pageHeaderData["buttonLabel"];
  const flag = pageHeaderData["australiaHeaderFlag"];
  return (
    <>
      <PageHeader
        url={`/image/page-header/${imageUrl}`}
        header={title}
        buttonLabel={description}
        flag={flag}
      />
      <Spacer />
    </>
  );
};

export default CountriesAustraliaPage;
