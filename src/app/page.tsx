const HomePage = () => {
  return (
    <main className="flex w-screen pt-28 md:pt-0 h-full md:h-screen items-center relative justify-center">
      <div className="w-full px-12 md:px-0  md:w-[1000px]">
        <p className=" uppercase text-xs text-slate-600 hero-tagline relative pl-3">LEARN SMARTER</p>
        <h1 className="text-4xl">
          Learning with <span className="font-semibold">Experts</span>
        </h1>
        <p className="md:w-3/4 w-full my-2 mb-3 font-[300] tracking-[1.8px] text-[13px] text-gray-600">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          We believe that learning programming requires more than just resources. That's why we provide free guidelines, simplified roadmaps, and a supportive community to empower your coding journey. Join us today to experience the joy of learning, sharing knowledge, and contributing to a thriving programming community.
        </p>
        <div className="flex items-center gap-4">
          <button className="p-2 px-4 rounded-full bg-black/90 text-white text-sm">
            Early Access
          </button>
          <p className="text-sm">What you&apos;ll get? 👇</p>
        </div>
        <div className="flex mt-14 flex-wrap items-center gap-4">
          <div className="p-3 w-full md:w-[320px] border-transparent hover:border-slate-200 transition-all  rounded-lg border">
            <h1 className="text-[11px] uppercase font-bold tracking-[1.4px]">Learn with Real-World Project</h1>
            <p className="text-[10px] mt-1 tracking-[2px]">
              Gain hands-on experience and practical skills that you can directly apply to real-world scenarios.
            </p>
          </div>

          <div className="p-3 w-full md:w-[320px] border-transparent hover:border-slate-200 transition-all  rounded-lg border">
            <h1 className="text-[11px] uppercase font-bold tracking-[1.4px]"> Gamification</h1>
            <p className="text-[10px] mt-1 tracking-[2px]">
              Make learning programming an enjoyable experience through gamification. Stay motivated and track your progress.
            </p>
          </div>

          <div className="p-3 w-full md:w-[320px] border-transparent hover:border-slate-200 transition-all  rounded-lg border">
            <h1 className=" text-[11px] uppercase font-bold tracking-[1.4px]"> Speaking Code</h1>
            <p className="text-[10px] mt-1 tracking-[2px]">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Enhance your understanding of code concepts and best practices through a unique "speaking code" feature.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
