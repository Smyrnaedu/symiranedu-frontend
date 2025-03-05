import Image from 'next/image';
import React from 'react';
import "./page-header.scss";

type PageHeaderProps = {
  header: string;
  url:string
};

const PageHeader: React.FC<PageHeaderProps> = ({ header, url }) => {
  return (
    <div className='page-header'>
      <Image 
        src={`${url}`} 
        width={1920} 
        height={1280} 
        alt="page-header" 
      />
      <span>{header}</span>
    </div>
  );
};

export default PageHeader;