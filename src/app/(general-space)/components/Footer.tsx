import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-12 flex flex-col  items-end justify-center py-3 w-full">
      <p className="text-[8px]">
        <span className="text-gray-500 font-medium tracking-[2px] text-[10px]">
          OLearnin
        </span>{" "}
        | Open Source Learning Platform
      </p>

      <div className="flex items-center gap-1 text-[8px]">
        by
        <Link
          className="transition-all hover:scale-105"
          href={"https://twitter.com/dev_syedshihab"}
          target="__blank"
        >
          <div className="font-medium flex items-center gap-1">
            <img
              src={"/desyed.jpg"}
              className=" object-cover rounded-full"
              width={10}
              height={10}
              alt="desyed"
            />
            Syed Shihab
          </div>
        </Link>
        <span>&</span>
        <Link
          className="transition-all hover:scale-105"
          href={"https://twitter.com/niazmorshed_"}
          target="__blank"
        >
          <div className="font-medium flex items-center gap-1">
            <img
              src={"/niazmorshed.jpg"}
              className=" object-cover rounded-full"
              width={10}
              height={10}
              alt="desyed"
            />
            Niaz Morshed
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
