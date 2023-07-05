import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed z-50 top-0 w-full bg-[#fff8] backdrop-blur-md">
      <div className="md:container px-5 md:mx-auto py-6 flex items-center justify-between">
        <img className="w-[30px]" src="/logo.svg" alt="" />
        <nav className="flex items-center gap-5">
          <Link href="https://github.com/uqi-dev/olearnin" target="__blank">
            <GitHubLogoIcon width={20} height={20} />
          </Link>
          <Link href="https://www.linkedin.com/company/olearnin" target="__blank">
            <LinkedInLogoIcon width={20} height={20} />
          </Link>
          {/*<TwitterLogoIcon width={20} height={20} />*/}
        </nav>
      </div>

    </header>
  );
};

export default Header;
