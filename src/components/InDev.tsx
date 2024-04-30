import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <div className="h-screen pt-16 px-8 flex flex-col gap-4 justify-center items-center bg-[#C1D4E2]">
      <h2 className="text-2xl">This page is in development</h2>
      <Button>
        <Link href="/">Go to homepage</Link>
      </Button>
    </div>
  );
}
