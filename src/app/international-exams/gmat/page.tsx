import PageHeaderForExams from "@/components/common/page-header/page-header-for-exams";
import { Spacer } from "@/components/common/spacer";
import React from "react";
import data from "@/helpers/data/tr.json";
import SubNavbar from "@/components/pages/common/header/subnavbar";
// Adjust the import according to the actual export from the module
import { examsData } from "@/components/pages/international-exams/data/programs";
import ProgramLayoutExam from "@/components/pages/international-exams/program-layout-exam";

const GmatExamPage: React.FC = () => {
  const pageHeaderData = data[0]?.PageHeaders || {};
  const title = pageHeaderData["gmatPageHeader"];
  const imageUrl = pageHeaderData["gmatHeaderImage"];

  return (
    <>
      <PageHeaderForExams title={title} src={imageUrl} />
      <SubNavbar category="gmat" />
      <Spacer />
      <ProgramLayoutExam examData={examsData.gmat} />
    </>
  );
};

export default GmatExamPage;
