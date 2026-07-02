import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Tentang() {
  return (
    <main className="min-h-screen bg-white pt-28">

      {/* Banner */}
      <section className="bg-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-8">

          <h1 className="text-5xl font-bold">
            Tentang Kami
          </h1>

          <p className="mt-5 text-lg text-gray-200 max-w-3xl">
            Mengenal lebih dekat PT Saputra Pangan Pratama sebagai perusahaan
            distribusi produk pangan yang profesional, terpercaya, dan
            berkomitmen menghadirkan kualitas terbaik.
          </p>

        </div>
      </section>

      {/* Profil */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg">
  <Image
    src="/images/depan.png"
    alt="Gedung PT Saputra Pangan Pratama"
    fill
    className="object-cover"
    priority
  />
</div>

          <div>

            <h2 className="text-4xl font-bold text-green-900">
              Profil Perusahaan
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              PT Saputra Pangan Pratama merupakan perusahaan yang bergerak
              di bidang distribusi produk pangan berkualitas seperti ayam,
              daging sapi, ikan, Telur, dan berbagai kebutuhan pangan
              lainnya.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              Dengan pengalaman lebih dari 10 tahun, kami terus berkembang
              menjadi mitra terpercaya bagi restoran, hotel, retail,
              industri, maupun instansi pemerintah.
            </p>

          </div>

        </div>

      </section>

      {/* Sejarah */}
      <section className="py-24 bg-gray-50">

        <div className="max-w-5xl mx-auto text-center px-8">

          <h2 className="text-4xl font-bold text-green-900">
            Sejarah Perusahaan
          </h2>

          <p className="mt-8 text-gray-600 leading-8">
            Berawal dari usaha distribusi pangan berskala lokal,
            PT Saputra Pangan Pratama terus berkembang melalui komitmen
            terhadap kualitas produk, pelayanan pelanggan, dan pengiriman
            yang tepat waktu hingga mampu melayani berbagai wilayah di Indonesia.
          </p>

        </div>

      </section>

      {/* Visi Misi */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-8">

          <div className="bg-green-900 text-white rounded-2xl p-10">

            <h2 className="text-3xl font-bold">
              Visi
            </h2>

            <p className="mt-6 leading-8">
              Sebagai perusahaan penyedia daging ayam serta sapi yang halal dan sehat dengan kualitas terbaik dan harga terjangkau
            </p>

          </div>

          <div className="bg-yellow-500 rounded-2xl p-10">

            <h2 className="text-3xl font-bold">
              Misi
            </h2>

            <ul className="mt-6 space-y-3">

              <li>• Menjaga mutu dan kualitas produk.</li>

              <li>• Memprioritaskan pelayanan untuk kepuasan pelanggan.</li>

              <li>• Menyediakan produk berkualitas dan Halal dengan harga terjangkau.</li>

           
            </ul>

          </div>

        </div>

      </section>

      {/* Nilai */}

      <section className="py-24 bg-gray-100">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-center text-4xl font-bold text-green-900 mb-14">
            Nilai Perusahaan
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white rounded-xl shadow p-8">
              <h3 className="font-bold text-xl">
                Integritas
              </h3>
              <p className="mt-4 text-gray-600">
                Menjunjung tinggi kejujuran dalam setiap proses bisnis.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-8">
              <h3 className="font-bold text-xl">
                Kualitas
              </h3>
              <p className="mt-4 text-gray-600">
                Mengutamakan mutu produk dan pelayanan.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-8">
              <h3 className="font-bold text-xl">
                Profesional
              </h3>
              <p className="mt-4 text-gray-600">
                Bekerja secara disiplin dan bertanggung jawab.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-8">
              <h3 className="font-bold text-xl">
                Inovasi
              </h3>
              <p className="mt-4 text-gray-600">
                Terus berkembang mengikuti kebutuhan pelanggan.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Legalitas */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto text-center px-8">

          <h2 className="text-4xl font-bold text-green-900">
            Legalitas & Komitmen
          </h2>

          <p className="mt-8 text-gray-600 leading-8">
            PT Saputra Pangan Pratama berkomitmen menjalankan kegiatan usaha
            secara profesional dengan mematuhi seluruh regulasi yang berlaku,
            menjaga kualitas produk, keamanan pangan, serta memberikan
            pelayanan terbaik kepada seluruh pelanggan.
          </p>

        </div>

      </section>

      {/* Penutup */}

      <section className="bg-green-900 text-white py-20">

        <div className="max-w-5xl mx-auto text-center px-8">

          <h2 className="text-4xl font-bold">
            Menjadi Mitra Distribusi Pangan Terpercaya
          </h2>

          <p className="mt-6 text-lg text-gray-200">
            Kami siap menjadi partner terbaik untuk memenuhi kebutuhan
            produk pangan berkualitas bagi bisnis Anda.
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