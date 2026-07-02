import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

const products = [
  {
    nama: "Ayam",
    gambar: "/images/ayam.png",
    deskripsi: "Ayam segar berkualitas premium dengan proses penyimpanan higienis, cocok untuk kebutuhan hotel, restoran, katering, dan industri pangan.",
  },
  {
    nama: "Parting Paha Bawah",
    gambar: "/images/paha.png",
    deskripsi: "Potongan paha bawah ayam pilihan dengan kualitas terbaik, tekstur lembut, dan cocok untuk berbagai kebutuhan kuliner maupun industri.",
  },
  {
    nama: "Boneless Paha",
    gambar: "/images/Boneless Paha.png",
    deskripsi: "Daging paha ayam tanpa tulang yang praktis diolah, memiliki tekstur juicy, serta ideal untuk restoran, UMKM, dan kebutuhan produksi makanan.",
  },
  {
    nama: "Tongue",
    gambar: "/images/Tongue.png",
    deskripsi: "Lidah sapi segar berkualitas premium, cocok untuk berbagai olahan kuliner..",
  },
  {
    nama: "Ribs",
    gambar: "/images/Ribs.png",
    deskripsi: "Iga sapi pilihan dengan kualitas terbaik, ideal untuk sop, bakar, dan BBQ.",
  },
  {
    nama: "Blade",
    gambar: "/images/Blade.png",
    deskripsi: "Potongan blade sapi berkualitas, cocok untuk steak, semur, dan rendang.",
  },
    {
    nama: "Ikan",
    gambar: "/images/Ikan.png",
    deskripsi: "Ikan segar berkualitas tinggi dengan kesegaran yang selalu terjaga.",
  },
  {
    nama: "Telur",
    gambar: "/images/Telur.png",
    deskripsi: "Telur ayam segar pilihan dengan kualitas terbaik untuk berbagai kebutuhan.",
  },
  {
    nama: "Bebek",
    gambar: "/images/Bebek.png",
    deskripsi: "Bebek segar berkualitas premium, cocok untuk berbagai olahan kuliner.",
  },
];

export default function Produk() {
  return (
    <main className="min-h-screen bg-white">

      <Navbar />

      {/* Banner */}
      <section className="bg-green-900 text-white pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-8 text-center">

          <h1 className="text-5xl font-bold">
            Produk Kami
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-200">
            Kami menyediakan berbagai produk pangan berkualitas tinggi
            untuk memenuhi kebutuhan hotel, restoran, retail,
            industri, dan berbagai sektor usaha lainnya.
          </p>

        </div>
      </section>

      {/* Kategori */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-center text-green-900 mb-14">
            Kategori Produk
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Ayam",
              "Daging",
              "Ikan",
              "Telur",
            ].map((item) => (

              <div
                key={item}
                className="bg-green-50 rounded-xl p-8 text-center border hover:shadow-lg transition"
              >

                <h3 className="text-xl font-semibold text-green-900">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Daftar Produk */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-center text-green-900 mb-14">
            Daftar Produk
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {products.map((item) => (

              <div
                key={item.nama}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
              >

                <div className="relative h-64">

                  <Image
                    src={item.gambar}
                    alt={item.nama}
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                  />

                </div>

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-green-900">
                    {item.nama}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">
                    {item.deskripsi}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Keunggulan */}

      <section className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-center text-green-900 mb-14">
            Mengapa Produk Kami?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white rounded-xl p-8 shadow text-center">
              <h3 className="font-bold text-xl">Segar</h3>
              <p className="mt-3 text-gray-600">
                Produk selalu segar dan berkualitas.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow text-center">
              <h3 className="font-bold text-xl">Halal</h3>
              <p className="mt-3 text-gray-600">
                Diproses sesuai standar keamanan pangan.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow text-center">
              <h3 className="font-bold text-xl">Distribusi Cepat</h3>
              <p className="mt-3 text-gray-600">
                Pengiriman tepat waktu ke seluruh Indonesia.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow text-center">
              <h3 className="font-bold text-xl">Terpercaya</h3>
              <p className="mt-3 text-gray-600">
                Dipercaya berbagai perusahaan dan mitra bisnis.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto bg-green-900 rounded-2xl text-white text-center px-8 py-16">

          <h2 className="text-4xl font-bold">
            Butuh Produk Berkualitas?
          </h2>

          <p className="mt-5 text-lg text-gray-200">
            Hubungi kami sekarang untuk mendapatkan penawaran terbaik.
          </p>

          <Link
            href="/kontak"
            className="inline-block mt-8 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold"
          >
            Hubungi Kami
          </Link>

        </div>

      </section>

    </main>
  );
}