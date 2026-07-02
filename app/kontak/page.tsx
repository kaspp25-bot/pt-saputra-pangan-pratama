"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";


export default function Kontak() {
  return (
    <main className="min-h-screen bg-white pt-24">

      {/* Banner */}
      <section className="bg-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-8 text-center">

          <h1 className="text-5xl font-bold">
            Hubungi Kami
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto">
            Kami siap membantu kebutuhan produk pangan Anda.
            Silakan hubungi kami melalui informasi di bawah ini
            atau kirimkan pesan melalui formulir kontak.
          </p>

        </div>
      </section>

      {/* Informasi */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-14">

          {/* Kiri */}

          <div>

            <h2 className="text-4xl font-bold text-green-900 mb-10">
              Informasi Perusahaan
            </h2>

            <div className="space-y-8">

              <div>
                <h3 className="font-bold text-xl">
                  📍 Alamat
                </h3>

                <p className="text-gray-600 mt-2">
                  Jl. Raya Leuwinanggung, Leuwinanggung, Kec. Tapos, Kota Depok, Jawa Barat 16456
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  📞 Telepon
                </h3>

                <p className="text-gray-600 mt-2">
                  +62 819-2500-644
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  ✉️ Email
                </h3>

                <p className="text-gray-600 mt-2">
                  kaspp@saputrapanganpratama.com
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  🕒 Jam Operasional
                </h3>

                <p className="text-gray-600 mt-2">
                  Senin - Sabtu
                  <br />
                  09.00 - 17.00 WIB
                </p>
              </div>

            </div>

          </div>

          {/* Form */}

          <div className="bg-gray-50 rounded-2xl shadow-lg p-10">

            <h2 className="text-3xl font-bold text-green-900 mb-8">
              Kirim Pesan
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full border rounded-lg p-4"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg p-4"
              />

              <input
                type="text"
                placeholder="Nomor WhatsApp"
                className="w-full border rounded-lg p-4"
              />

              <textarea
                rows={5}
                placeholder="Tulis pesan..."
                className="w-full border rounded-lg p-4"
              ></textarea>

              <button
                className="w-full bg-green-800 hover:bg-green-900 text-white py-4 rounded-lg font-semibold"
              >
                Kirim Pesan
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Maps */}
<section className="pb-24">
  <div className="overflow-hidden rounded-2xl shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.7664381120726!2d106.89938761018165!3d-6.41052789355346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eb00534abc25%3A0x93de082901fa0349!2sPT%20Mitra%20Saputra%20Cold%20Storage!5e1!3m2!1sid!2sid!4v1782803094242!5m2!1sid!2sid"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  </div>
</section>

      {/* FAQ */}

      <section className="py-20 bg-gray-100">

        <div className="max-w-5xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-center text-green-900 mb-12">
            Pertanyaan Umum
          </h2>

          <div className="space-y-6">

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-bold">
                Apakah melayani pengiriman luar kota?
              </h3>

              <p className="mt-3 text-gray-600">
                Ya, kami melayani pengiriman ke berbagai wilayah sesuai kebutuhan pelanggan.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-bold">
                Apakah bisa pemesanan dalam jumlah besar?
              </h3>

              <p className="mt-3 text-gray-600">
                Tentu, kami melayani pembelian retail maupun grosir.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-bold">
                Bagaimana cara melakukan pemesanan?
              </h3>

              <p className="mt-3 text-gray-600">
                Anda dapat menghubungi kami melalui WhatsApp, telepon,
                email, atau formulir kontak di atas.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto bg-green-900 rounded-2xl text-white text-center px-8 py-16">

          <h2 className="text-4xl font-bold">
            Siap Menjadi Mitra Kami?
          </h2>

          <p className="mt-5 text-lg text-gray-200">
            Jangan ragu menghubungi kami untuk informasi produk,
            kerja sama, maupun penawaran terbaik.
          </p>

          <Link
            href="https://wa.me/628192500644"
            className="inline-block mt-8 bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400"
          >
            Chat WhatsApp
          </Link>

        </div>

      </section>

    </main>
  );
}