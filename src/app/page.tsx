'use client'
import React from 'react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/sunsetBG.svg')" }} // coloque sua imagem em /public
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6">
  <h1 className="text-white text-2xl font-semibold">SafeZone</h1>
  <nav className="flex items-center gap-6 text-yellow-100 text-sm">
    <a href="/QuemSomos" className="hover:underline">Quem Somos</a>
    <a href="/mapa" className="hover:underline">Mapas/Dados</a>
    <a href="/noticias" className="hover:underline">Noticias</a>
    {/* <div className="relative">
      <img
        src="/image 1.png"
        alt="Buscar"
        className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
      />
      <input
      type="text"
      placeholder="Buscar..."
      className="pl-10 pr-4 py-1 rounded-md text-black text-sm"
      disabled
      />
    </div> */}
      <Link href="/cadastro">
        <img
          src="/image 3.png"
          alt="Perfil"
          className="w-6 h-6 rounded-full object-cover cursor-pointer"
          />
      </Link>
    </nav>
  </header>


      {/* Conteúdo central */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center h-[80%] px-4 text-white">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-100 mb-4">
        Porque segurança não é sorte é informação.
        </h2>
        <p className="text-lg md:text-xl mb-6">Mantenha-se protegido com o SafeZone.</p>

        <Link href="/QuemSomos">
        <button className="bg-cyan-400 text-white px-6 py-2 rounded-full hover:bg-cyan-500 transition">
          Saiba mais
        </button>
        </Link>
      </main>
    </div>
  )
}
