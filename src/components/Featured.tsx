import Image from "next/image";
import Selected from "./../../public/selected.png";
import Waves from "./../../public/waves.png";
import Link from "next/link";

const Featured = () => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 px-8">
      <div className="">
        <Image src={Waves} alt="Waves" className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-4">
        <Image src={Selected} alt="Selected" className="w-full" />
        <div className="flex flex-col gap-1">
          <Link href="/selected" className="text-xl hover:underline">
            Selected
          </Link>
          <p className="lg:w-1/2 text-neutral-500">
            In this section you will find best architecture achievements
            available for purchase
          </p>
        </div>
      </div>
    </div>
  );
};
export default Featured;
