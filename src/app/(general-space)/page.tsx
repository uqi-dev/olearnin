import WaitlistModal from "@/app/(general-space)/components/WaitlistModal";

const HomePage = () => {
  return (
    <main className="flex px-[4%] pt-28 pb-[50px] min-h-[calc(100vh_-_51px)] items-center">
      <div className="md:container md:mx-auto px-5">
        <p className=" uppercase text-xs text-slate-600 hero-tagline relative pl-3">
          LEARN SMARTER
        </p>
        <h1 className="text-4xl">
          Learning with <span className="font-semibold">Experts</span>
        </h1>
        <p className="w-full lg:w-1/2 font-[400] my-2 mb-3 text-[15px]">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          We believe that learning programming requires more than just
          resources. That's why we provide free guidelines, simplified roadmaps,
          and a supportive community to empower your coding journey. Join us
          today to experience the joy of learning, sharing knowledge, and
          contributing to a thriving programming community.
        </p>
        <div className="flex items-center gap-4">
          <WaitlistModal />
          <p className="text-[14.5px]">What you&apos;ll get? 👇</p>
        </div>
        <div className="flex mt-14 flex-wrap items-center justify-between">
          <div className="p-3 w-full md:w-[360px] border-transparent hover:border-slate-200 transition-all  rounded-lg border">
            <h1 className="text-[14.5px] uppercase font-bold">
              🐣Learn with Real-World Project
            </h1>
            <p className="text-[13.5px] mt-1 text-gray-700">
              Gain hands-on experience and practical skills that you can
              directly apply to real-world scenarios.
            </p>
          </div>

          <div className="p-3 w-full md:w-[360px] border-transparent hover:border-slate-200 transition-all  rounded-lg border">
            <h1 className="text-[14.5px] uppercase font-bold">
              🏆Gamification
            </h1>
            <p className="text-[13.5px] mt-1 text-gray-700">
              Make learning programming an enjoyable experience through
              gamification. Stay motivated and track your progress.
            </p>
          </div>

          <div className="p-3 w-full md:w-[360px] border-transparent hover:border-slate-200 transition-all  rounded-lg border">
            <h1 className=" text-[14.5px] uppercase font-bold">
              🧑‍💻Speaking Code
            </h1>
            <p className="text-[13.5px] mt-1 text-gray-700">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Enhance your understanding of code concepts and best practices
              through a unique "speaking code" feature.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
