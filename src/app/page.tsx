import Featured from "@/components/Featured";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Recommended from "@/components/Recommended";
import SearchWidget from "@/components/SearchWidget";
import BG from "./../../public/newsletterbg.png";
// import BG2 from "./../../public/contactformbg.png";
import Card from "@/components/Card";

// Card
import Recommended1 from "./../../public/recommended1.png";
import Recommended2 from "./../../public/recommended2.png";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      {/* <Card
        img={Recommended1}
        link="/selected"
        title="Card"
        description="This house received a high international rating and&nbsp;many architectural awards"
        cta="Buy now"
        secondary="Learn more"
      /> */}
      <Hero />
      <Featured />
      <SearchWidget />
      <Recommended />
      <Newsletter type="email" img={BG} />
      {/* <Newsletter type="phone" img={BG2} /> */}
    </main>
  );
}
