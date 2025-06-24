import React from "react";
import data from "@/helpers/data/tr.json";
import PageHeader from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer";
import ContactPageComponent from "@/components/contact/contact";

const ContactPage: React.FC = () => {
  const pageHeaderData = data[0]?.PageHeaders || {};
  const title = pageHeaderData["contactPageHeader"];
  const imageUrl = pageHeaderData["onlineUniversityHeaderImage"];
  const contactInfo = data[0]?.Contact || {};
  return (
    <>
      <PageHeader
        url={`/image/page-header/${imageUrl}`}
        header={title}
        showButton={false}
      />
      <Spacer />
      <ContactPageComponent {...contactInfo} />
    </>
  );
};

export default ContactPage;
