import Link from "next/link";

const Footer = () => {
  return (
    <div className="p-8 md:py-12 gap-8 bg-black grid md:grid-cols-4">
      <div className="col-span-2 flex flex-col gap-4 my-auto">
        <Link href="/" className="text-white text-2xl hover:underline">
          Domme
        </Link>
        <div className="flex flex-col gap-2 text-neutral-500">
          <p className="text-sm">
            Copyright © 2024 Domme Inc, all rights reserved
          </p>
          <p className="text-sm ">
            Images{" "}
            <a
              target="_blank"
              href="https://unsplash.com/"
              className="hover:text-neutral-400"
            >
              Unsplash®
            </a>{" "}
            <br /> Map data{" "}
            <a
              target="_blank"
              href="https://www.google.com/maps"
              className="hover:text-neutral-400"
            >
              Google Maps®
            </a>{" "}
            <br /> Design and Development{" "}
            <a
              target="_blank"
              href="http://egors-portfolio.tilda.ws"
              className="hover:text-neutral-400"
            >
              ©Egor Vetoshkin
            </a>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 my-auto">
        <p className="text-white cursor-pointer">Best Projects</p>
        <p className="text-neutral-500 hover:text-neutral-400 cursor-pointer">
          Etaj
        </p>
        <p className="text-neutral-500 hover:text-neutral-400 cursor-pointer">
          Waves
        </p>
        <Link
          href="/selected"
          className="text-neutral-500 hover:text-neutral-400"
        >
          Selected
        </Link>
      </div>
      <div className="flex flex-col gap-2 my-auto">
        <Link href="/search" className="text-white">
          Search apartment
        </Link>
        <p className="text-neutral-500 hover:text-neutral-400 cursor-pointer">
          Contact
        </p>
        <p className="text-neutral-500 hover:text-neutral-400 cursor-pointer">
          Waves
        </p>
        <Link href="/map" className="text-neutral-500 hover:text-neutral-400">
          View map
        </Link>
      </div>
    </div>
  );
};
export default Footer;
