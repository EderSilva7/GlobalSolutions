'use client'

import { useEffect, useState } from 'react'

type Article = {
  title: string
  description: string | null
  url: string
  source: { name: string }
}

export default function Noticias() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch('/api/noticias')
        const data = await res.json()

        if (!res.ok) {
          setError(data.error || 'Erro ao buscar notícias')
        } else {
          setArticles(data.articles)
        }
      } catch {
        setError('Erro ao buscar notícias')
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  if (loading) return <p className="p-8 text-center">Carregando notícias...</p>
  if (error) return <p className="p-8 text-center text-red-600">{error}</p>

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-blue-700">
        Últimas Notícias sobre Desastres Naturais
      </h1>

      {articles.length === 0 ? (
        <p className="text-center text-gray-600">Nenhuma notícia encontrada.</p>
      ) : (
        articles.map((article, i) => (
          <article
            key={i}
            className="mb-6 bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-blue-800 hover:text-blue-600">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </h2>
            <p className="mt-2 text-gray-700">
              {article.description || 'Sem descrição'}
            </p>
            <p className="mt-2 text-sm text-gray-400 italic">
              Fonte: {article.source.name}
            </p>
          </article>
        ))
      )}
    </main>
  )
}
