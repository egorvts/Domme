import Featured from "@/components/Featured";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Recommended from "@/components/Recommended";
import SearchWidget from "@/components/SearchWidget";
import BG from "./../../public/newsletterbg.png";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-10">
      <Hero />
      <Featured />
      <SearchWidget />
      <Recommended />
      <Newsletter type="email" img={BG} />
    </main>
  );
}
