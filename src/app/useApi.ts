import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ArticleWithInfo } from 'src/types'

const API_KEY = process.env.REACT_APP_API_KEY
const address = `https://api.nytimes.com/svc/search/v2/articlesearch.json`

interface QueryProps {
  headline?: string
  date?: string
  page?: number
  glocations?: string[]
}

export const articleApi = createApi({
  reducerPath: 'articleApi',
  tagTypes: ['Article'],
  baseQuery: fetchBaseQuery({ baseUrl: address }),
  endpoints: (builder) => ({
    getArticleByQueries: builder.query<ArticleWithInfo, QueryProps>({
      query: ({ headline, date, glocations, page }) => {
        const headlineQuery = headline ? `headline:(${headline})` : ''
        const glocationsQuery = glocations?.length ? `glocations:("${glocations.join('" "')}")` : ''
        const dateQuery = date ? `&begin_date=${date}&end_date=${date}` : ''
        const and = headlineQuery && glocationsQuery ? ' AND ' : ''

        const pageQuery = page ? `&page=${page}` : ''

        return `?fq=${headlineQuery}${and}${glocationsQuery}${dateQuery}${pageQuery}&api-key=${API_KEY}`
      },
    }),
  }),
})

export const { useGetArticleByQueriesQuery } = articleApi
