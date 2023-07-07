import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed z-50 px-[4%] top-0 w-full bg-[#fff8] backdrop-blur-md">
      <div className="md:container md:mx-auto py-6 flex items-center justify-between">
        <img className="w-[30px]" src="/logo.svg" alt="" />
        <nav className="flex items-center gap-5">
          <Link href="https://github.com/uqi-dev/olearnin" target="__blank">
            <GitHubLogoIcon width={20} height={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/olearnin"
            target="__blank"
          >
            <LinkedInLogoIcon width={20} height={20} />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
