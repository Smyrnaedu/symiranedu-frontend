import PageHeaderForExams from "@/components/common/page-header/page-header-for-exams";
import { Spacer } from "@/components/common/spacer";
import React from "react";
import data from "@/helpers/data/tr.json";

const PteExamPage: React.FC = () => {
  const pageHeaderData = data[0]?.PageHeaders || {};
  const title = pageHeaderData["ptePageHeader"];
  const imageUrl = pageHeaderData["pteHeaderImage"];
 
  return (
    <>
      <PageHeaderForExams title={title} src={imageUrl} />
      <Spacer />
    </>
  );
};

export default PteExamPage;