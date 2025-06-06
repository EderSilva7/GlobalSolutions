'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Cadastro() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [mensagem, setMensagem] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (senha !== confirmarSenha) {
      setMensagem('As senhas não coincidem.')
      return
    }

    try {
      const res = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha }),
      })

      const data = await res.json()
      if (res.ok) {
        setMensagem('Usuário cadastrado com sucesso!')
      } else {
        setMensagem(data.error || 'Erro ao cadastrar')
      }
    } catch (err) {
      setMensagem('Erro no servidor')
    }
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/cadastro.svg')" }}
    >
        <div className="bg-gray-600 bg-opacity-95 p-8 pb-6 rounded-lg w-full max-w-md shadow-lg text-white">

        
        <h1 className="text-3xl font-bold text-center text-cyan-400 mb-6">Cadastro</h1>
        

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm">Email:</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 bg-transparent border border-cyan-400 rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm">Senha:</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 bg-transparent border border-cyan-400 rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm">Confirmar Senha:</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 bg-transparent border border-cyan-400 rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 rounded-md transition duration-300"
          >
            Continuar
          </button>
        </form>

        {mensagem && (
          <p className="text-sm text-center mt-4 text-yellow-300">{mensagem}</p>
        )}

        <div className="mt-4 text-center">
          <Link href="/login" className="text-sm text-gray-300 hover:underline">
            Já tenho uma conta
          </Link>
          <Link href="/" className="text-sm text-gray-300 hover:underline block mt-2">
            Voltar para a home
          </Link>
        </div>
      </div>
    </div>
  )
}
