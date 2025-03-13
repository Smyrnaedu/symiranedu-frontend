import React from "react";
import "./section-header.scss";

interface SectionHeaderProps {
  title: string;
  spans?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  spans,
}) => {
  return (
    <div className="section-header">
      <p>{title}</p>
      <h2>{spans}</h2>
    </div>
  );
};
