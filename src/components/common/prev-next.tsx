"use client";

import React from "react";
import "./prev-next.scss";
import { GrNext, GrPrevious } from "react-icons/gr";

interface PrevNextProps {
  onNext: () => void;
  onPrevious: () => void;
  className?: string;
}

const PrevNext: React.FC<PrevNextProps> = ({
  onNext,
  onPrevious,
  className = "",
}) => {
  return (
    <div className={`prev-next-container ${className}`}>
      <button className="swiper-button-prev" onClick={onPrevious}>
        <GrPrevious />
      </button>
      <button className="swiper-button-next" onClick={onNext}>
        <GrNext />
      </button>
    </div>
  );
};

export default PrevNext;
