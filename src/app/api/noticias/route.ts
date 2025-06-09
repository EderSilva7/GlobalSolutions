import { NextResponse } from 'next/server'

const NEWS_API_KEY = process.env.NEWS_API_KEY

export async function GET() {
  if (!NEWS_API_KEY) {
    return NextResponse.json({ error: 'API key não configurada' }, { status: 500 })
  }

  const url = `https://newsapi.org/v2/everything?q=natural+disaster&language=pt&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`

  try {
    const res = await fetch(url)
    const data = await res.json()

    if (data.status !== 'ok') {
      return NextResponse.json({ error: 'Erro ao buscar notícias' }, { status: 500 })
    }

    const articles = data.articles.slice(0, 5)

    return NextResponse.json({ articles })
  } catch (error) {
    return NextResponse.json({ error: 'Erro interno no servidor' }, { status: 500 })
  }
}
