import React from "react";
import data from "@/helpers/data/tr.json";
import PageHeader from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer";

const CountriesGermanyPage: React.FC = () => {
  const pageHeaderData = data[0]?.PageHeaders || {};
  const title = pageHeaderData["germanyPageHeader"];
  const imageUrl = pageHeaderData["germanyHeaderImage"];
  const description = pageHeaderData["buttonLabel"];
 const flag = pageHeaderData["germanyHeaderFlag"];
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

export default CountriesGermanyPage;
