import PageHeaderForExams from "@/components/common/page-header/page-header-for-exams";
import { Spacer } from "@/components/common/spacer";
import React from "react";
import data from "@/helpers/data/tr.json";

const ToeflExamPage: React.FC = () => {
  const pageHeaderData = data[0]?.PageHeaders || {};
  const title = pageHeaderData["toeflPageHeader"];
  const imageUrl = pageHeaderData["toeflHeaderImage"];
 
  return (
    <>
      <PageHeaderForExams title={title} src={imageUrl} />
      <Spacer />
    </>
  );
};

export default ToeflExamPage;
