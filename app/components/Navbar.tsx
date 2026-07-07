"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-800">
          SPP
        </h1>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/tentang">Tentang</Link></li>
          <li><Link href="/produk">Produk</Link></li>
          <li><Link href="/kontak">Kontak</Link></li>
        </ul>

        {/* Tombol Hamburger */}
        <button
          className="md:hidden text-3xl text-green-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <Link
            href="/"
            className="block px-6 py-4 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/tentang"
            className="block px-6 py-4 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Tentang
          </Link>

          <Link
            href="/produk"
            className="block px-6 py-4 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Produk
          </Link>

          <Link
            href="/kontak"
            className="block px-6 py-4 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Kontak
          </Link>
        </div>
      )}
    </nav>
  );
}
