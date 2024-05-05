import Image from "next/image";
import Waves from "../../../../public/waves.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-lvh w-lvw">
      <div className="z-[-1]">
        <Image src={Waves} alt="House image" fill className="object-cover" />
      </div>
      <div className="absolute flex flex-col gap-6 h-lvh justify-center px-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl">"Waves" — Market st.&#160;44</h1>
          <p>
            This house received a high international rating <br /> and many
            architectural awards
          </p>
        </div>
        <div className="flex gap-2">
          <Button>
            <Link href="/search">View layouts</Link>
          </Button>
          <Button variant="ghost">
            <Link href="/map">View map</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
