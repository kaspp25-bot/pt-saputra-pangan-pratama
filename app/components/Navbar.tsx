import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-2xl font-bold text-green-800">
          SPP
        </h1>

        <ul className="flex gap-8 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/tentang">Tentang</Link></li>
          <li><Link href="/produk">Produk</Link></li>
          <li><Link href="/kontak">Kontak</Link></li>
        </ul>

      </div>
    </nav>
  );
}