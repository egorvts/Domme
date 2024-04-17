import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = (props: { type: string; img: StaticImageData }) => {
  return (
    <div className="relative h-96">
      <div className="z-[-1]">
        <Image
          src={props.img}
          alt="House image"
          fill={true}
          className="object-cover object-left"
        />
      </div>
      <div className="absolute flex flex-col gap-6 h-96 justify-center px-8">
        <div className="gap-4">
          <h1 className="text-4xl text-white">
            {props.type === "email"
              ? "Find your dream apartment"
              : "Have questions? Contact us!"}
          </h1>
        </div>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type={props.type === "email" ? "email" : "phone"}
            placeholder={props.type === "email" ? "Email" : "Phone number"}
            className="rounded-xl"
          />
          <Button type="submit" className="rounded-xl">
            {props.type === "email" ? "Subscribe" : "Request a call"}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
