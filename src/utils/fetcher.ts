import { ArticleWithInfo } from 'src/types'

const API_KEY = process.env.REACT_APP_API_KEY
const address = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}`

interface FetcherProps {
  begin_date?: string
  end_date?: string
  fl?: string
  fq?: string
  page?: number
  q?: string
}

// &begin_date=${begin_date}&end_date=${end_date}&fl=${fl}&fq=${fq}page=${page}q=${q}
export const fetcher = async () => {
  const rawResponse = await fetch(`${address}`)
  const response = await rawResponse.json()

  return response as ArticleWithInfo
}
