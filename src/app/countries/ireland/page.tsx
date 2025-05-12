import React from "react";
import data from "@/helpers/data/tr.json";
import PageHeader from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer";

const CountriesIrelandPage: React.FC = () => {
 const pageHeaderData = data[0]?.PageHeaders || {};
   const title = pageHeaderData["irelandPageHeader"];
   const imageUrl = pageHeaderData["irelandHeaderImage"];
   return (
     <>
       <PageHeader url={`/image/page-header/${imageUrl}`} header={title} />
       <Spacer />
     </>
   );
};

export default CountriesIrelandPage;