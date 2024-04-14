import Image from "next/image";
import Selected from "./../../public/selected.png";
import Waves from "./../../public/waves.png";
import Link from "next/link";

const Featured = () => {
  return (
    <div className="grid grid-cols-3 px-8 gap-8">
      <div className="col-span-2">
        <Image src={Selected} alt="House image" className="w-full" />
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <Image src={Waves} alt="House image" className="w-full" />
        <div className="flex flex-col gap-2">
          <Link href="/selected" className="text-xl underline">
            Selected
          </Link>
          <p className="text-neutral-400 leading-4">
            In this section you will find best architecture achievements
            available for purchase
          </p>
        </div>
      </div>
    </div>
  );
};
export default Featured;
