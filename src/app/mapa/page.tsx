// pages/mapa.tsx
'use client'
import { useState } from 'react'

export default function MapaDesastres() {
  const [camadas, setCamadas] = useState({
    placas: true,
    vulcoes: true,
    temperatura: true,
    terremotos: true
  })

  const toggleCamada = (nome: keyof typeof camadas) => {
    setCamadas(prev => ({ ...prev, [nome]: !prev[nome] }))
  }

  return (
    <main className="min-h-screen bg-[#03151b] text-white p-4 flex flex-col items-center">
      {/* Topo */}
      <div className="w-full flex justify-between items-center mb-6">
        <button className="bg-teal-700 px-4 py-1 rounded-full hover:bg-teal-600 transition" onClick={() => window.history.back()}>
          Voltar
        </button>
        <h1 className="text-xl font-semibold bg-teal-700 px-6 py-1 rounded-full">Mapa</h1>
        <div className="w-20" /> {/* espaço para manter alinhamento */}
      </div>

      {/* Filtros */}
      <div className="flex gap-4 flex-wrap justify-center mb-6">
        <button onClick={() => toggleCamada('placas')} className={`px-4 py-2 rounded-md font-bold ${camadas.placas ? 'bg-teal-700' : 'bg-teal-900'}`}>
          Placas Tectônicas
        </button>
        <button onClick={() => toggleCamada('vulcoes')} className={`px-4 py-2 rounded-md font-bold ${camadas.vulcoes ? 'bg-teal-700' : 'bg-teal-900'}`}>
          Vulcões
        </button>
        <button onClick={() => toggleCamada('temperatura')} className={`px-4 py-2 rounded-md font-bold ${camadas.temperatura ? 'bg-teal-700' : 'bg-teal-900'}`}>
          Temperatura
        </button>
        <button onClick={() => toggleCamada('terremotos')} className={`px-4 py-2 rounded-md font-bold ${camadas.terremotos ? 'bg-teal-700' : 'bg-teal-900'}`}>
          Terremotos
        </button>
      </div>

      {/* Mapa (placeholder) */}
      <div className="w-full max-w-6xl h-[500px] bg-gray-300 rounded-lg shadow-inner text-black flex items-center justify-center">
        <p>Área do mapa de desastres (API)</p>
      </div>
    </main>
  )
}
