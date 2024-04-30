import Hero from "../_components/Hero";
import MapWidget from "../_components/MapWidget";

export default function page() {
  return (
    <main className="flex flex-col gap-y-10">
      <Hero />
      <MapWidget />
    </main>
  );
}
