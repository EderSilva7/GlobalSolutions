'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function QuemSomos() {
  return (
    <div className="min-h-screen bg-[#011520] text-white px-6 py-12">
     


        <div className="mb-12 flex justify-center">
        <Link href="/">
            <button
            className="bg-[#11786F] text-white px-6 py-2 rounded-full text-xl font-semibold transition-transform transform hover:scale-105 hover:bg-[#0e615a] cursor-pointer"
            >
            SafeZone
            </button>
        </Link>
        </div>


      {/* Título */}
      <h2 className="text-3xl font-semibold text-center text-[#11786F] mb-12 border-b border-[#11786F] w-fit mx-auto pb-1">
        Quem Somos?
      </h2>

      {/* Container dos Cards */}
    <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="bg-[#11786F] p-8 rounded-2xl w-full md:w-[48%] text-center flex flex-col items-center">
          <Image
            src="/icon1.svg"
            alt="Card 1"
            width={200}
            height={200}
            className="mb-6"
          />
          <p className="text-base leading-relaxed">
            <strong>SafeZone</strong> é um sistema de monitoramento e alerta que utiliza dados em tempo real e inteligência artificial para identificar riscos ambientais, climáticos e urbanos com precisão.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#11786F] p-8 rounded-2xl w-full md:w-[48%] text-center flex flex-col items-center">
          <Image
            src="/icon2.svg"
            alt="Card 2"
            width={200}
            height={200}
            className="mb-6"
          />
          <p className="text-base leading-relaxed">
            <strong>Plataforma:</strong> Reunimos alertas de fontes confiáveis como Defesa Civil, INMET, CEMADEN e sistemas de satélite. As informações são cruzadas com dados geográficos, populacionais e ambientais, oferecendo análises detalhadas por região.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#11786F] p-8 rounded-2xl w-full md:w-[48%] text-center flex flex-col items-center">
          <Image
            src="/icon3.svg"
            alt="Card 3"
            width={200}
            height={200}
            className="mb-6"
          />
          <p className="text-base leading-relaxed">
            O <strong>SafeZone</strong> publica alertas validados sobre enchentes, deslizamentos, queimadas e outros eventos críticos, com painéis interativos, mapas e relatórios acessíveis para usuários, comunidades e gestores públicos.
          </p>
        </div>
      </div>
            {/* Seção Nosso Time */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-semibold text-[#11786F] mb-10">Nosso Time</h2>

        <div className="flex flex-wrap justify-center gap-12">
          {/* Membro E */}
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full bg-gray-300 overflow-hidden">
              <Image
                src="/Eu.jpg"
                alt="Membro E"
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-4 text-lg font-medium">Eder Souza</p>
          </div>

          {/* Membro G */}
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full bg-gray-300 overflow-hidden">
              <Image
                src="/gabriel.jpg"
                alt="Membro G"
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-4 text-lg font-medium">Gabriel Gonçalves</p>
          </div>

          {/* Membro L */}
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full bg-gray-300 overflow-hidden">
              <Image
                src="/leo.jpg"
                alt="Membro L"
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-4 text-lg font-medium">Leonardo Rocha</p>
          </div>
        </div>
      </div>

    </div>
  )
}
