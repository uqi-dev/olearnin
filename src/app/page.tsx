const HomePage = () => {
  return (
    <main className="flex pt-28 pb-[50px]">
      <div className="md:container md:mx-auto px-5">
        <p className=" uppercase text-xs text-slate-600 hero-tagline relative pl-3">LEARN SMARTER</p>
        <h1 className="text-4xl">
          Learning with <span className="font-semibold">Experts</span>
        </h1>
        <p className="my-2 mb-3 font-[300]  text-gray-700">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          We believe that learning programming requires more than just resources. That's why we provide free guidelines, simplified roadmaps, and a supportive community to empower your coding journey. Join us today to experience the joy of learning, sharing knowledge, and contributing to a thriving programming community.
        </p>
        <div className="flex items-center gap-4">
          <button className="p-2 px-4 rounded-full bg-black/90 text-white text-sm">
            Early Access
          </button>
          <p className="text-sm">What you&apos;ll get? 👇</p>
        </div>
        <div className="flex mt-14 flex-wrap items-center">
          <div className="p-3 w-full md:w-[320px] border-transparent hover:border-slate-200 transition-all  rounded-lg border">
            <h1 className="text-[12px] uppercase font-bold tracking-[1.4px]">🐣Learn with Real-World Project</h1>
            <p className="text-xs mt-1 text-gray-700">
              Gain hands-on experience and practical skills that you can directly apply to real-world scenarios.
            </p>
          </div>

          <div className="p-3 w-full md:w-[320px] border-transparent hover:border-slate-200 transition-all  rounded-lg border">
            <h1 className="text-[12px] uppercase font-bold tracking-[1.4px]">🏆Gamification</h1>
            <p className="text-xs mt-1 text-gray-700">
              Make learning programming an enjoyable experience through gamification. Stay motivated and track your progress.
            </p>
          </div>

          <div className="p-3 w-full md:w-[320px] border-transparent hover:border-slate-200 transition-all  rounded-lg border">
            <h1 className=" text-[12px] uppercase font-bold tracking-[1.4px]">🧑‍💻Speaking Code</h1>
            <p className="text-xs mt-1 text-gray-700">
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
