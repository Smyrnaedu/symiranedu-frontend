import React from "react";
import data from "@/helpers/data/tr.json";
import PageHeader from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer";

const CountriesCzechRepublicPage: React.FC = () => {
  const pageHeaderData = data[0]?.PageHeaders || {};
  const title = pageHeaderData["czechiaPageHeader"];
  const imageUrl = pageHeaderData["czechiaHeaderImage"];
  const description = pageHeaderData["buttonLabel"];
  const flag = pageHeaderData["czechiaHeaderFlag"];
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

export default CountriesCzechRepublicPage;
