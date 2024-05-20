// @ts-nocheck
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import etherScaleLogo from "@/public/svgs/etherScale-with-text-logo.svg";

const Navbar = () => {
  return (
    <header className="z-50 w-full py-6">
      <nav className="container flex gap-5 flex-between">
        <Link href={"/"} className="">
          <Image src={etherScaleLogo} alt="etherscale" />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
