import { useCallback, useEffect, useMemo, useState } from 'react'
import FlexBase from 'src/components/Cores/FlexBase'
import PostItem from 'src/components/Layout/PostItem'
import { Article, ArticleWithInfo } from 'src/types'
import { localStorageKey } from 'src/utils/const'
import styled from 'styled-components'

interface PostListProps {
  data: ArticleWithInfo
}

const PostList = ({ data }: PostListProps) => {
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

  return (
    <PostListContainer>
      {data.response.docs.map((a) => (
        <PostItem
          scrapedArticles={scrapedArticles}
          onChangeScrapedArticles={onChangeScrapedArticles}
          article={a}
          key={a._id}
        />
      ))}
    </PostListContainer>
  )
}

const PostListContainer = styled(FlexBase)`
  width: 100%;
  gap: 8px;
  flex-direction: column;

  & + & {
    padding-top: 8px;
  }
`

export default PostList
