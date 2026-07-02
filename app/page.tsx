import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center px-8">
          <div>
            <h1 className="text-6xl font-bold leading-tight">
              PT Saputra
              <br />
              Pangan
              <br />
              Pratama
            </h1>

            <p className="mt-6 text-lg text-gray-200 leading-8">
              Solusi terpercaya untuk distribusi produk pangan berkualitas,
              melayani kebutuhan industri, retail, restoran, hotel, dan
              berbagai mitra usaha di seluruh Indonesia.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/produk"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold"
              >
                Lihat Produk
              </Link>

              <Link
                href="/kontak"
                className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-green-900"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>

         <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl">
  <Image
    src="/images/gudang.png"
    alt="Gudang PT Saputra Pangan Pratama"
    fill
    className="object-cover"
    priority
  />
</div>
        </div>
      </section>

      {/* TENTANG */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto text-center px-8">
          <h2 className="text-4xl font-bold text-green-900">
            Tentang Perusahaan
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            PT Saputra Pangan Pratama merupakan perusahaan distribusi produk
            pangan berkualitas dengan pengalaman lebih dari 10 tahun.
          </p>

          <Link
            href="/tentang"
            className="inline-block mt-8 bg-green-800 text-white px-6 py-3 rounded-lg"
          >
            Selengkapnya
          </Link>
        </div>
      </section>

      {/* KEUNGGULAN */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center text-green-900 mb-14">
            Mengapa Memilih Kami
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Produk Berkualitas",
              "Halal & Higienis",
              "Distribusi Cepat",
              "Pelayanan Terbaik",
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl shadow p-8 text-center"
              >
                <h3 className="font-bold text-xl">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* ================= PRODUK ================= */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-8">

    <h2 className="text-4xl font-bold text-center text-green-900 mb-14">
      Produk Unggulan
    </h2>

    <div className="grid md:grid-cols-4 gap-8">

      {[
        {
          nama: "Ayam",
          gambar: "/images/ayam.png",
        },
        {
          nama: "Daging Sapi",
          gambar: "/images/daging.png",
        },
        {
          nama: "Ikan",
          gambar: "/images/ikan.png",
        },
        {
          nama: "Telur",
          gambar: "/images/telur.png",
        },
      ].map((produk) => (

        <div
          key={produk.nama}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
        >

          <Image
            src={produk.gambar}
            alt={produk.nama}
            width={400}
            height={300}
            className="w-full h-56 object-cover"
          />

          <div className="p-5 text-center">

            <h3 className="text-xl font-bold text-green-900">
              {produk.nama}
            </h3>

          </div>

        </div>

      ))}

    </div>

    <div className="text-center mt-12">

      <Link
        href="/produk"
        className="bg-green-800 hover:bg-green-900 text-white px-7 py-3 rounded-lg font-semibold"
      >
        Lihat Semua Produk
      </Link>

    </div>

  </div>
</section>

      {/* STATISTIK */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h2 className="text-5xl font-bold">10+</h2>
            <p>Tahun Pengalaman</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">100+</h2>
            <p>Mitra</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">1000+</h2>
            <p>Distribusi</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">24/7</h2>
            <p>Pelayanan</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto bg-green-800 rounded-2xl text-white text-center p-12">
          <h2 className="text-4xl font-bold">
            Siap Menjadi Mitra Bisnis Anda?
          </h2>

          <p className="mt-5">
            Hubungi kami untuk mendapatkan penawaran terbaik.
          </p>

          <Link
            href="/kontak"
            className="inline-block mt-8 bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold"
          >
            Hubungi Kami
          </Link>
        </div>
      </section>
    </main>
  );
}