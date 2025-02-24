import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainLogo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/image/logo/symrnaEDU.png"
        width={135}
        height={34}
        alt="Main-Logo"
        priority
      />
    </Link>
  );
};

export default MainLogo;
