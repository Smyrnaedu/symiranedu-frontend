import React from "react";
import data from "@/helpers/data/tr.json";
import PageHeader from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer";
const CountriesPolandPage: React.FC = () => {
  const pageHeaderData = data[0]?.PageHeaders || {};
  const title = pageHeaderData["polandPageHeader"];
  const imageUrl = pageHeaderData["polandHeaderImage"];
  const description = pageHeaderData["buttonLabel"];
  const flag = pageHeaderData["polandHeaderFlag"];
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

export default CountriesPolandPage;
