"use client";

import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Card = (props: {
  img?: StaticImageData;
  title: string;
  link: string;
  description?: string;
  cta?: string;
  secondary?: string;
}) => {
  const router = useRouter();

  return (
    <div
      className="flex flex-col w-full relative cursor-pointer"
      onClick={() => router.push(props.link)}
    >
      {props.img && (
        <div className="h-64 relative">
          <Image
            fill
            className="object-cover mb-4 md:m-0"
            src={props.img}
            alt={props.title}
          />
        </div>
      )}
      <div className="py-4 relative">
        {props.title && (
          <h2 className="text-xl cursor-pointer hover:underline">
            {props.title}
          </h2>
        )}
        {props.description && (
          <p className="text-neutral-500">{props.description}</p>
        )}
        {props.cta && props.secondary && (
          <div className="flex gap-2 mt-4">
            <Button className="rounded-xl">{props.cta}</Button>
            <Button className="rounded-xl" variant="ghost">
              {props.secondary}
            </Button>
          </div>
        )}
        {props.cta && !props.secondary && (
          <Button className="mt-4">{props.cta}</Button>
        )}
      </div>
    </div>
  );
};
export default Card;
