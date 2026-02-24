import Image from 'next/image';
import React from 'react';

const NavbarLogoSection = () => {
    return (
      <>
        <Image
          src="/Logo.png"
          alt="Logo"
          width={120}
          height={40}
          className="w-35"
          priority
        />
      </>
    );
};

export default NavbarLogoSection;