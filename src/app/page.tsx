const HomePage = () => {
  return (
    <main className="flex w-screen pt-28 md:pt-0 h-full md:h-screen items-center relative justify-center">
      <div className="w-full px-12 md:px-0  md:w-[1000px]">
        <p className=" uppercase text-sm text-slate-600">LEARN SMARTER</p>
        <h1 className="text-4xl">
          Learning with <span className="font-semibold">Experts</span>
        </h1>
        <p className="md:w-1/2 w-full my-2 mb-3 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi illum
          ad tempora nam. Iusto non iure, et soluta velit omnis voluptates
          voluptas facere saepe quos suscipit sunt ducimus consequuntur a!
        </p>
        <div className="flex items-center gap-4">
          <button className="p-2 px-4 rounded-full bg-black/90 text-white text-sm">
            Early Access
          </button>
          <p className="text-sm">What you&apos;ll get? 👇</p>
        </div>
        <div className="flex mt-14 flex-wrap items-center gap-4">
          <div className="p-3 w-full md:w-[320px] border-transparent hover:border-slate-200 transition-all  rounded-lg border">
            <h1 className="text-base font-medium"> 🗣️ Speaking Code 🧑‍💻</h1>
            <p className="text-[13px] mt-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            </p>
          </div>

          <div className="p-3 w-full md:w-[320px] border-transparent hover:border-slate-200 transition-all  rounded-lg border">
            <h1 className="text-base font-medium"> 🗣️ Speaking Code 🧑‍💻</h1>
            <p className="text-[13px] mt-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            </p>
          </div>

          <div className="p-3 w-full md:w-[320px] border-transparent hover:border-slate-200 transition-all  rounded-lg border">
            <h1 className="text-base font-medium"> 🗣️ Speaking Code 🧑‍💻</h1>
            <p className="text-[13px] mt-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Expeditads
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
