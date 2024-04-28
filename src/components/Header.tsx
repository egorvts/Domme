import Link from "next/link";
import { Button } from "./ui/button";
import { MobileIcon } from "@radix-ui/react-icons";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-between px-8 py-4 z-50">
      <div className="flex gap-6 items-center">
        <Link href="/" className="text-xl hover:underline my-auto">
          Domme
        </Link>
        <div className="hidden md:flex gap-4 leading-8">
          <Link href="/selected" className="hover:underline">
            Selected
          </Link>
          <Link href="/search" className="hover:underline">
            Search apartment
          </Link>
          <Link href="/map" className="hover:underline">
            View map
          </Link>
        </div>
      </div>
      {/* Small screens */}
      <Button className="flex md:hidden h-10" variant="outline" size="icon">
        <a href="tel:+4402000440444" className="text-xl hover:underline">
          <MobileIcon />
        </a>
      </Button>
      {/* Large screens */}
      <a
        href="tel:+4402000440444"
        className="text-xl hover:underline hidden md:flex"
      >
        +44 (0) 200 044 044 4
      </a>
    </div>
  );
};
export default Header;
