import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import BG from "./../../public/newsletterbg.png";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <div className="relative h-96">
      <div className="z-[-1]">
        <Image src={BG} alt="House image" fill={true} />
      </div>
      <div className="absolute flex flex-col gap-6 h-96 justify-center px-8">
        <div className="gap-4">
          <h1 className="text-4xl text-white">Find your dream apartment</h1>
        </div>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Email" />
          <Button type="submit" className="rounded-xl">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
