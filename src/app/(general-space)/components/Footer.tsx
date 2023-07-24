import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-12 flex flex-col font-bold items-end justify-center py-3 w-full">
      <p className="text-[13px]">
        <span className="text-gray-500 font-medium tracking-[2px] ">
          OLearnin
        </span>{" "}
        | Open Source Learning Platform
      </p>

      <div className="flex items-end gap-1 text-[13px]">

        <Link
          href={"https://uqidev.com"}
          target="__blank"
        >
          <div className="font-medium flex items-end gap-1 text-orange-500">
            <img
              src={"/uqidev.png"}
              className=" object-cover"
              width={25}
              height={25}
              alt="desyed"
            />
            UQIDEV
          </div>
        </Link>
        Initiative
      </div>
    </footer>
  );
};

export default Footer;
