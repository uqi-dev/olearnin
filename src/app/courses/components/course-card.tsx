import JSIcon from "@/app/svgIcons/js";
import AngularIcon from "@/app/svgIcons/angular";
import { ChevronsRight } from "lucide-react";

const CourseCard = () => {
  return <div className="course-card shadow rounded-xl overflow-hidden w-[270px]">
    <div className="flex justify-center items-center card-top bg-secondary relative overflow-hidden h-[150px] w-[270px]">
      <img className="absolute -left-[100px] -top-10 w-[200px] opacity-10 motion-safe:animate-spin-slow2" src="/logo.svg" alt="logo" />

      <div className="bg-[#00000017] px-3 h-full relative backdrop-blur-sm">
        {/*  language logo */}
        <div className="min-w-[120px] flex gap-1 mb-1 ">
          <JSIcon className="w-10"/>
          <AngularIcon className="w-10"/>
        </div>
        <p className="leading-0 text-sm "><span className="font-bold text-4xl text-gray-600 ">06</span> Chapters</p>
        <p className="leading-0 text-sm "><span className="font-bold text-4xl text-gray-600">04</span> Projects</p>
        {/*<p className="leading-0 text-sm "><span className="font-bold text-4xl text-gray-500">86</span> Quiz</p>*/}
        {/*<p className="leading-0 text-sm "><span className="font-bold text-4xl text-gray-500">122</span> Enrolls</p>*/}


      </div>

      <div className="bg-[#ffffff78] absolute w-full left-0 bottom-0 flex gap-1 items-center justify-center bg-[linear-gradient(0deg, #79777a69, transparent)]">
        <p className="leading-0 text-xs text-gray-500"><span className="font-bold text-sm">105</span> Quiz</p>
        <p className="leading-0 text-xs text-gray-500"><span className="font-bold text-sm">201</span> Enrolls</p>
        <p className="leading-0 text-xs text-gray-500"><span className="font-bold text-sm">02</span> Revisions</p>
        <p className="leading-0 text-xs text-gray-500"><span className="font-bold text-sm">03</span> Contributors</p>
      </div>

    </div>
    <div className="card-bottom w-100 p-5">
      <h1 className="text-[14.5px] uppercase font-bold">
        {/*course name*/}
        🏆Javascript Fundamentals
      </h1>
      <p className="text-[13.5px] mt-1 text-gray-700">
        {/* shourt brief */}
        Make learning programming an enjoyable experience through
        gamification.

        <div className="mt-3">
          <a className="flex items-center text-[14.5px] uppercase font-bold hover:text-orange-500 " href="/sfsd">Start Now <ChevronsRight/></a>
        </div>
      </p>
    </div>
  </div>
}

export default CourseCard;