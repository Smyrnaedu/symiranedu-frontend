import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainLogo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/image/logo/icon-red.png"
        width={80}
        height={67}
        alt="Main-Logo"
        priority
      />
    </Link>
  );
};

export default MainLogo;
