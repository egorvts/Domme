import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";

const Card = (props: {
  img?: StaticImageData;
  title: string;
  description?: string;
  cta?: string;
  secondary?: string;
}) => {
  return (
    <div className="w-96 h-48">
      {props.img && (
        <Image
          className="w-full object-cover mb-4 md:m-0"
          src={props.img}
          alt={props.title}
          fill
        />
      )}
      {props.title && <h2 className="text-xl">{props.title}</h2>}
      {props.description && (
        <p className="text-neutral-500">{props.description}</p>
      )}
      {props.cta && props.secondary && (
        <div className="flex gap-2">
          <Button className="rounded-xl">{props.cta}</Button>
          <Button className="rounded-xl" variant="ghost">
            {props.secondary}
          </Button>
        </div>
      )}
      {props.cta && !props.secondary && <Button>{props.cta}</Button>}
    </div>
  );
};
export default Card;
