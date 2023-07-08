const CoursesBanner = () => {
  return <div className=" bg-secondary p-10 rounded-2xl shadow relative overflow-hidden">
    <p className=" uppercase text-xs text-slate-600 hero-tagline relative pl-3">
      LEARN SMARTER
    </p>
    <h1 className="text-4xl">
      Learning with <span className="font-semibold">Experts</span>
    </h1>
    <div className="flex items-center gap-4">
      <p className="text-[14.5px]">What you&apos;ll get? 👇</p>
    </div>
    <img className="absolute left-14 -top-10 w-[800px] opacity-10 motion-safe:animate-spin-slow" src="/logo.svg" alt="logo" />
  </div>
}

export default CoursesBanner;