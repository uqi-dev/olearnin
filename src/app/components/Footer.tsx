import Link from "next/link";

const Footer = () => {
  return (
    <footer className="md:fixed px-12 bottom-0 flex flex-col  items-end justify-center py-3 w-full">
      <p className="">
        <span className="text-gray-500 font-medium">OLearnin</span> | Open
        Source Learning Platform
      </p>

      <div className="flex items-center gap-1 text-xs">
        Created by{" "}
        <Link
          className="transition-all hover:scale-105"
          href={"https://twitter.com/dev_syedshihab"}
          target="__blank"
        >
          <div className="font-medium ml-2 flex items-center gap-2">
            <img
              src={"/desyed.jpg"}
              className=" object-cover rounded-full"
              width={20}
              height={20}
              alt="desyed"
            />
            Syed Shihab
          </div>{" "}
        </Link>
        <span>&</span>
        <Link
          className="transition-all hover:scale-105"
          href={"https://twitter.com/niazmorshed_"}
          target="__blank"
        >
          <div className="font-medium ml-2 flex items-center gap-2">
            <img
              src={"/niazmorshed.jpg"}
              className=" object-cover rounded-full"
              width={20}
              height={20}
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
