import Link from "next/link";
import React from "react";

type DataListHeaderProps = {
  title: string;
  targetUrl?: string;
  linkText?: string;
};

export const DataListHeader: React.FC<DataListHeaderProps> = ({
  title,
  targetUrl,
  linkText = "New",
}) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h2>{title}</h2>
      {targetUrl && (
        <Link href={targetUrl} className="btn btn-primary">
          {linkText}
        </Link>
      )}
    </div>
  );
};

export default DataListHeader;






