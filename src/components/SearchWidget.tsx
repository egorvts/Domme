import BG from "./../../public/searchwidgetbg.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const SearchWidget = () => {
  return (
    <div className="relative h-96">
      <div className="z-[-1]">
        <Image src={BG} alt="House image" fill={true} />
      </div>
      <div className="absolute flex flex-col gap-6 h-96 justify-center px-8">
        <div className="gap-4">
          <h1 className="text-4xl">Find your dream apartment</h1>
        </div>
        <div className="flex gap-2">
          <Button className="rounded-xl">
            <Link href="/search">Search Apartment</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default SearchWidget;
