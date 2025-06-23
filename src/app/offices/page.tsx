import PageHeader from "@/components/common/page-header/page-header";
import data from "@/helpers/data/tr.json";
import React from "react";

const OfficesPage: React.FC = () => {
  const pageHeaderData = data[0]?.PageHeaders || {};
  const title = pageHeaderData["officePageHeader"];
  const imageUrl = pageHeaderData["aboutHeaderImage"];
  const buttonLabel = pageHeaderData["buttonLabel"];
  return (
    <div>
      <PageHeader
        url={`/image/page-header/${imageUrl}`}
        header={title}
        buttonLabel={buttonLabel}
      />
      <p>Welcome to the offices page!</p>
    </div>
  );
};

export default OfficesPage;
