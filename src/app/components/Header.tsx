import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed z-50 py-6 px-12 top-0 w-full flex items-center justify-between">
      <img className="w-[30px]" src="/logo.svg" alt="" />
      <nav className="flex items-center gap-5">
        <Link href="https://github.com/uqi-dev/olearnin" target="__blank">
          <GitHubLogoIcon width={20} height={20} />
        </Link>
        <TwitterLogoIcon width={20} height={20} />
      </nav>
    </header>
  );
};

export default Header;
