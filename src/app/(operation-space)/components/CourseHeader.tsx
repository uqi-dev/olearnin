import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { TwitterIcon } from "lucide-react";

const CourseHeader = () => {
  return (
    <header className="fixed z-50 top-0 w-full bg-[#fff8] backdrop-blur-md">
      <div className="md:container md:mx-auto flex items-end justify-between">
        <div className="flex gap-2 items-end">
          <div className="bg-black" style={{padding: '40px 12px 12px 12px'}}>
            <Link href="/">
              <img className="w-[30px]" src="/logo.svg" alt="" />
            </Link>
          </div>
          <div className="leading-[0]">
            <h1 className="font-[500] uppercase text-2xl">Javascript Fundamentals</h1>
            <p className="text-xs uppercase"><span className="text-orange-500 font-bold">80</span> points
              <span className="float-right flex gap-1 text-gray-300">
                <span className="pointer-events-none">share</span>
                <Link className="hover:text-orange-500" href=""><TwitterLogoIcon /></Link>
                <Link className="hover:text-orange-500" href=""><LinkedInLogoIcon/></Link>
              </span>
            </p>
            <div className="h-[2px] bg-secondary">
              <div className="w-[30%] h-[2px] bg-orange-600"></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center bg-[#f5f5f5] h-[50px]">
          <div className=" flex justify-center items-center p-3">
            <img
              src={"/desyed.jpg"}
              className=" object-cover rounded-full"
              width={30}
              height={30}
              alt="desyed"
            />
          </div>
          <div className=" flex flex-col justify-center pr-3 leading-[0.7] pt-1.5">
            <p className="font-medium">Syed Shihab</p>
            <div className="text-xs hover:text-orange-500"><a href="">Be Contributor?</a></div>
          </div>
          {/*<div className="flex">Be contributor <Link href="https://github.com/uqi-dev/olearnin" target="__blank">*/}
          {/*  /!*<GitHubLogoIcon width={20} height={20} />*!/*/}
          {/*</Link></div>*/}

        </div>
      </div>
    </header>
  );
};

export default CourseHeader;
