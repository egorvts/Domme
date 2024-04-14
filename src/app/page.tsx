import Featured from "@/components/Featured";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Recommended from "@/components/Recommended";
import SearchWidget from "@/components/SearchWidget";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <Hero />
      <Featured />
      <SearchWidget />
      <Recommended />
      <Newsletter />
    </main>
  );
}
