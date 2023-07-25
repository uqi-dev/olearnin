"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const searchParams = useSearchParams();
  return (
    <>
      <section className="flex px-[4%] pt-20 pb-[50px] min-h-[calc(100vh_-_51px)]">
        <div className="md:container md:mx-auto px-5">{children}</div>
      </section>
    </>
  );
}
