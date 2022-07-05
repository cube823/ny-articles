import { useCallback, useEffect, useMemo, useState } from 'react'
import EmptyPage from 'src/app/Scrape/EmptyPage'
import FlexBase from 'src/components/Cores/FlexBase'
import Layout from 'src/components/Layout'
import PostItem from 'src/components/Layout/PostItem'
import { Article } from 'src/types'
import { localStorageKey } from 'src/utils/const'
import styled from 'styled-components'

const Scrape = () => {
  const localStorageArticles = useMemo(() => localStorage.getItem(localStorageKey), [])

  const [scrapedArticles, setScrapedArticles] = useState<Article[]>([])

  const onChangeScrapedArticles = useCallback((scrapedArticlesParam: Article[]) => {
    setScrapedArticles(scrapedArticlesParam)
  }, [])

  useEffect(() => {
    if (localStorageArticles !== null) {
      setScrapedArticles(JSON.parse(localStorageArticles) as Article[])
    }
  }, [localStorageArticles])

  if (scrapedArticles.length === 0) {
    return (
      <Layout>
        <EmptyPage />
      </Layout>
    )
  }

  return (
    <Layout>
      <PostListContainer>
        {scrapedArticles.map((a) => (
          <PostItem
            scrapedArticles={scrapedArticles}
            onChangeScrapedArticles={onChangeScrapedArticles}
            article={a}
            key={a._id}
          />
        ))}
      </PostListContainer>
    </Layout>
  )
}

const PostListContainer = styled(FlexBase)`
  width: 100%;
  gap: 8px;
  flex-direction: column;
`

export default Scrape
