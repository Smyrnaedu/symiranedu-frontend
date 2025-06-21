import PageHeaderForExams from "@/components/common/page-header/page-header-for-exams";
import { Spacer } from "@/components/common/spacer";
import React from "react";
import data from "@/helpers/data/tr.json";
import SubNavbar from "@/components/pages/common/header/subnavbar";
// Adjust the import according to the actual export from the module
import { examsData } from "@/components/pages/international-exams/data/programs";
import ProgramLayoutExam from "@/components/pages/international-exams/program-layout-exam";

const SatExamPage: React.FC = () => {
  const pageHeaderData = data[0]?.PageHeaders || {};
  const title = pageHeaderData["satPageHeader"];
  const imageUrl = pageHeaderData["satHeaderImage"];

  return (
    <>
      <PageHeaderForExams title={title} src={imageUrl} />
      <SubNavbar category="sat" />
      <Spacer />
      <ProgramLayoutExam examData={examsData.sat} />
    </>
  );
};

export default SatExamPage;
