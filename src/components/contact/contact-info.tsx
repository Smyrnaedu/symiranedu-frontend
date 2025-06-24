import React from 'react';
import { appConfig } from '@/helpers/config';
import Link from 'next/link';

type ContactInformationProps = {
  title: string;
  sub_description: string;
};
type SocialMediaItem = {
  url: string;
  icon: React.ElementType; // Use React.ElementType for the icon type
  title: string;
};

const socialMenu: [string, SocialMediaItem][] = Object.entries(appConfig.contact.socialMedia);

const ContactInformation: React.FC<ContactInformationProps> = ({ title, sub_description }) => {
  const { phone1, email, address } = appConfig.contact.info;

  return (
    <div className="contact-information">
      <div className="top">
        <h3>{title}</h3>
        <p>{sub_description}</p>
      </div>

      <div className="middle">
        <p>
          <span>{React.createElement(phone1.icon, { style: { marginRight: "12px", fontSize:"1.3rem" } })}</span>
          <span>{phone1.value}</span>
        </p>
        <p>
          <span>{React.createElement(email.icon, { style: { marginRight: "12px", fontSize:"1.3rem" } })}</span>
          <span>{email.value}</span>
        </p>
        <p>
          <span>{React.createElement(address.icon, { style: { marginRight: "12px", fontSize:"1.3rem" } })}</span>
          <span>
            {address.value}
          </span>
        </p>
      </div>

      <div className="bottom">
        {socialMenu.map(([key, value]) => (
        <Link href={value.url} key={key}>
          <value.icon />
        </Link>
      ))}
      </div>
      <span className='circle-big'></span>
      <span className='circle-small'></span>
    </div>
  );
};

export default ContactInformation;