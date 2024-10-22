import React from "react";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      <div className="md:hidden flex items-center justify-between h-full">
        <Link href="/">
          <div className="text-2xl tracking-wide">OB SHOP</div>
        </Link>
        <Menu />
      </div>

      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        <div className="w-1/3">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={24} height={24} />
            <div className="text-2xl tracking-wide">OB SHOP</div>
          </Link>
        </div>
        <div className="w-2/3 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
