import Image from "next/image";
import Recommended1 from "./../../public/recommended1.png";
import Recommended2 from "./../../public/recommended2.png";
import Link from "next/link";
import { Button } from "./ui/button";

const Recommended = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 px-8">
        <div>
          <Image
            src={Recommended1}
            alt="House image"
            className="w-full object-cover mb-4 md:m-0"
          />
        </div>
        <div className="flex flex-col gap-4 my-auto  ml-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-4xl">"Waves" &#8212; Market st. 44</h3>
            <p className="text-neutral-400 leading-4">
              This house received a high international rating <br /> and many
              architectural awards
            </p>
          </div>
          <div className="flex gap-2">
            <Button className="rounded-xl">
              <Link href="/search">Learn more</Link>
            </Button>
            <Button variant="ghost" className="rounded-xl">
              <Link href="/map">View map</Link>
            </Button>
          </div>
        </div>
      </div>
      {/* Second */}
      <div className="grid grid-cols-2 px-8">
        <div className="flex flex-col gap-4 my-auto">
          <div className="flex flex-col gap-2">
            <h3 className="text-4xl">"Nature" &#8212; Theatre st. 22</h3>
            <p className="text-neutral-400 leading-4">
              Own apartment house near the city center <br /> with garden plot
              and garage
            </p>
          </div>
          <div className="flex gap-2">
            <Button className="rounded-xl">
              <Link href="/search">Learn more</Link>
            </Button>
            <Button variant="ghost" className="rounded-xl">
              <Link href="/map">View map</Link>
            </Button>
          </div>
        </div>
        <div>
          <Image
            src={Recommended2}
            alt="House image"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default Recommended;
