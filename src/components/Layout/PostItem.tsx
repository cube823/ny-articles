import { MouseEvent, useCallback, useMemo } from 'react'
import FlexBase from 'src/components/Cores/FlexBase'
import TextBase from 'src/components/Cores/TextBase'
import { IconBase } from 'src/components/Icons/IconBase'
import { Article } from 'src/types'
import { localStorageKey } from 'src/utils/const'
import styled from 'styled-components'

interface PostItemProps {
  article: Article
  scrapedArticles: Article[]
  onChangeScrapedArticles: (scrapedArticlesParam: Article[]) => void
}

const PostItem = ({ scrapedArticles, onChangeScrapedArticles, article }: PostItemProps) => {
  const person = useMemo(
    () => (article.byline.person.length ? `${article.byline.original}` : ''),
    [article.byline.original, article.byline.person.length],
  )

  const pubDate = useMemo(
    () => article.pub_date.substring(0, 10).replaceAll('-', '.'),
    [article.pub_date],
  )

  const pubDay = useMemo(() => {
    const date = new Date(pubDate).getDay()
    switch (date) {
      case 0:
        return '(일)'
      case 1:
        return '(월)'
      case 2:
        return '(화)'
      case 3:
        return '(수)'
      case 4:
        return '(목)'
      case 5:
        return '(금)'
      default:
        return '(토)'
    }
  }, [pubDate])

  const isScraped = useMemo(
    () => (scrapedArticles.find((a) => a._id === article._id) ? true : false),
    [article._id, scrapedArticles],
  )

  const scrape = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.preventDefault()
      const currentArticle = scrapedArticles.find((a) => a._id === article._id)

      if (currentArticle) {
        const newArticles = scrapedArticles.filter((a) => a._id !== article._id)
        onChangeScrapedArticles(newArticles)
        localStorage.setItem(localStorageKey, JSON.stringify(newArticles))
        return
      }

      const newArticles = JSON.parse(JSON.stringify(scrapedArticles)) as Article[]
      newArticles.push(article)
      onChangeScrapedArticles(newArticles)
      localStorage.setItem(localStorageKey, JSON.stringify(newArticles))
    },
    [article, onChangeScrapedArticles, scrapedArticles],
  )

  return (
    <PostItemContainer href={article.web_url}>
      <PostItemTopContainer>
        <HeadlineContainer>
          <TextBase
            text={article.headline.main}
            fontSize={18}
            lineHeight={28}
            fontWeight={600}
            color="black100"
          />
        </HeadlineContainer>
        <StartContainer onClick={scrape}>
          <IconBase
            icon={isScraped ? 'filled-star' : 'star'}
            color={isScraped ? 'yellow' : 'black80'}
          />
        </StartContainer>
      </PostItemTopContainer>
      <PostItemBottomContainer>
        <OriginContainer>
          <TextBase
            text={article.source}
            fontSize={13}
            lineHeight={20}
            color="black100"
            fontWeight={400}
          />
          <TextBase text={person} fontSize={13} lineHeight={20} color="black100" fontWeight={400} />
        </OriginContainer>
        <FlexBase style={{ flexShrink: 0 }}>
          <TextBase
            text={`${pubDate} ${pubDay}`}
            fontSize={13}
            lineHeight={20}
            color="black80"
            fontWeight={400}
          />
        </FlexBase>
      </PostItemBottomContainer>
    </PostItemContainer>
  )
}

const PostItemContainer = styled.a`
  display: flex;
  position: relative;
  width: calc(100% - 40px);
  min-width: 300px;
  background-color: ${(props) => props.theme.pallette.white90};
  flex-direction: column;
  border-radius: 8px;
  padding: 10px 20px;
  gap: 8px;
`

const PostItemTopContainer = styled(FlexBase)`
  align-items: flex-start;
  height: 56px;
  overflow: hidden;
`

const HeadlineContainer = styled(FlexBase)`
  max-width: calc(100% - 35px);
  letter-spacing: -0.05em;
`

const StartContainer = styled(FlexBase)`
  justify-content: flex-end;
  flex-shrink: 0;
  width: 35px;
  padding-top: 4.5px;

  cursor: pointer;
`

const PostItemBottomContainer = styled(FlexBase)`
  height: 20px;
  width: 100%;
  justify-content: space-between;
  letter-spacing: -0.05em;
`

const OriginContainer = styled(FlexBase)`
  gap: 8px;
  flex-shrink: 0;
  max-width: calc(100% - 88px);
  font-size: 13px;
  line-height: 20px;
  color: ${(props) => props.theme.pallette.black100};
  font-weight: 400;

  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export default PostItem
