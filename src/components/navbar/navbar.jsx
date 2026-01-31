"use client";

import React, { useState } from "react";
import NavbarLogoSection from "./navLogoSection";
import NavbarLinksSection from "./navLinksSection";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Menu", href: "#menu" },
  { name: "Our Story", href: "#story" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {

  return (
    // navbar parent
    <nav className="border border-amber-500 max-w-11/12 md:max-w-10/12 mx-auto flex justify-between">
        {/* logo section */}
        <section>
            <NavbarLogoSection/>
        </section>

        {/* nav links section */}
        <section>
            <NavbarLinksSection/>
        </section>

        {/* nav menu ECT section */}
        <section>
            section 3
        </section>
    </nav>
  );
};

export default Navbar;