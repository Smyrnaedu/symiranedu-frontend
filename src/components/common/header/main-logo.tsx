import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MainLogoProps{
  src?:string;
  width?:number;
  height?:number;
}

const MainLogo: React.FC<MainLogoProps> = ({src, width, height}) => {
  return (
    <Link href="/">
      <Image
        src={`${src}`}
        width={width}
        height={height}
        alt="Main-Logo"
        priority
      />
    </Link>
  );
};

export default MainLogo;
