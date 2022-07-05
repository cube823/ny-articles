import moment from 'moment'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { RootState } from 'src/app/store'
import FlexBase from 'src/components/Cores/FlexBase'

import TextBase from 'src/components/Cores/TextBase'
import { IconBase } from 'src/components/Icons/IconBase'
import { openModal } from 'src/features/filterModalSlice'
import styled from 'styled-components'

type HeaderType = 'headline' | 'calendar' | 'nation'

const HeaderItem = ({ headerType }: { headerType: HeaderType }) => {
  const location = useLocation()
  const dispatch = useDispatch()
  const headline = useSelector((state: RootState) => state.headlineFilter.headline)
  const date = useSelector((state: RootState) => state.dateFilter.date)
  const glocations = useSelector((state: RootState) => state.glocationsFilter.glocations)

  const hasValue = useMemo(() => {
    if (location.pathname.includes('scrape')) {
      return false
    }

    switch (headerType) {
      case 'headline':
        return Boolean(headline)
      case 'calendar':
        return Boolean(date)
      default:
        return Boolean(glocations.length)
    }
  }, [date, glocations.length, headerType, headline, location.pathname])

  const icon = useMemo(() => {
    switch (headerType) {
      case 'headline':
        return 'search'
      default:
        return 'calendar'
    }
  }, [headerType])

  const title = useMemo(() => {
    const isScrape = location.pathname.includes('scrape')
    switch (headerType) {
      case 'headline':
        return headline && !isScrape ? headline : '전체 헤드라인'
      case 'calendar':
        return date && !isScrape ? moment(date).format('YYYY.MM.DD') : '전체 날짜'
      case 'nation':
        return glocations.length && !isScrape
          ? glocations.length === 1
            ? glocations[0].label
            : `${glocations[0].label} 외 ${glocations.length - 1}개`
          : '전체 국가'
    }
  }, [date, glocations, headerType, headline, location.pathname])

  const onClick = () => dispatch(openModal())

  return (
    <HeaderItemContainer onClick={onClick} hasValue={hasValue}>
      {headerType !== 'nation' ? (
        <FlexBase>
          <IconBase icon={icon} size={16} color={hasValue ? 'blueMain' : 'black80'} />
        </FlexBase>
      ) : undefined}
      <TextBase
        text={title}
        fontSize={14}
        lineHeight={24}
        fontWeight={400}
        color={hasValue ? 'blueMain' : 'black80'}
      />
    </HeaderItemContainer>
  )
}

const HeaderItemContainer = styled(FlexBase)<{ hasValue: boolean }>`
  border-radius: 30px;
  border: 1px solid
    ${(props) => (props.hasValue ? props.theme.pallette.blueMain : props.theme.pallette.gray2)};
  height: 34px;
  max-width: calc(33% - 32px);
  min-width: 48px;
  padding: 0 12px;
  gap: 4px;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export default HeaderItem
