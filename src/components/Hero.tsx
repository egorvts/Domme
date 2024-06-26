import Image from "next/image";
import BG from "./../../public/herobg.png";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-lvh w-lvw">
      <div className="z-[-1]">
        <Image src={BG} alt="House image" fill className="object-cover" />
      </div>
      <div className="absolute flex flex-col gap-6 h-lvh justify-center px-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl">Dream apartment? &#8212; Easy with Domme</h1>
          <p>Unique architecture, scenic view and best vibes</p>
        </div>
        <div className="flex gap-2">
          <Button className="rounded-xl">
            <Link href="/search">Search Apartment</Link>
          </Button>
          <Button variant="ghost" className="rounded-xl">
            <Link href="/map">View map</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
