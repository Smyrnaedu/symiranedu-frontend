import PageHeaderForExams from "@/components/common/page-header/page-header-for-exams";
import { Spacer } from "@/components/common/spacer";
import React from "react";
import data from "@/helpers/data/tr.json";
// Adjust the import according to the actual export from the module
import { examsData } from "@/components/pages/international-exams/data/programs";
import ProgramLayoutExam from "@/components/pages/international-exams/program-layout-exam";
import SubNavbar from "@/components/pages/common/header/subnavbar";

const PteExamPage: React.FC = () => {
  const pageHeaderData = data[0]?.PageHeaders || {};
  const title = pageHeaderData["ptePageHeader"];
  const imageUrl = pageHeaderData["pteHeaderImage"];

  return (
    <>
      <PageHeaderForExams title={title} src={imageUrl} />
      <SubNavbar category="pte" />
      <Spacer />
      <ProgramLayoutExam examData={examsData.pte} />
    </>
  );
};

export default PteExamPage;
