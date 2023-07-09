"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CourseHeader from "@/app/(operation-space)/components/CourseHeader";
import Sidebar from "@/app/(operation-space)/components/Sidebar";

export default function CourseLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <>
      <CourseHeader />
     <section className="flex md:container md:mx-auto pt-[160px] pb-[50px] min-h-[calc(100vh_-_51px)] ">
          <Sidebar/>
          <div className="md:container md:mx-auto ">
            {children}
          </div>
      </section>
    </>
  );
}