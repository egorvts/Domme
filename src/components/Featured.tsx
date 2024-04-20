import Image from "next/image";
import Selected from "./../../public/selected.png";
import Waves from "./../../public/waves.png";
import Link from "next/link";
import Card from "./Card";

const Featured = () => {
  return (
    <div className="grid md:grid-cols-3 px-8 gap-8">
      <div className="col-span-2">
        <Image src={Selected} alt="House image" className="w-full" />
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <Card
          link="/selected"
          title="Selected"
          description="In this section you will find best architecture achievements available for purchase"
          img={Waves}
        />
      </div>
    </div>
  );
};
export default Featured;
