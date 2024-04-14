import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between px-8 py-4 z-50">
      <div className="flex gap-6">
        <Link href="/" className="text-xl hover:underline">
          Domme
        </Link>
        <div className="flex gap-2 leading-8">
          <Link href="/selected" className="hover:underline">
            Selected
          </Link>
          <Link href="/search" className="hover:underline">
            Search apartment
          </Link>
          <Link href="/map" className="hover:underline">
            View map
          </Link>
        </div>
      </div>
      <a href="tel:+4402000440444" className="text-xl hover:underline">
        +44 (0) 200 044 044 4
      </a>
    </div>
  );
};
export default Header;
