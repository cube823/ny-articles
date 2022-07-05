import { useMemo } from 'react'
import styled from 'styled-components'
import FlexBase from 'src/components/Cores/FlexBase'
import TextBase from 'src/components/Cores/TextBase'
import { IconBase } from 'src/components/Icons/IconBase'
import { useLocation } from 'react-router-dom'

type FooterItemType = 'home' | 'scrape'

interface FooterItemProps {
  footerItemType: FooterItemType
}

const FooterItem = ({ footerItemType }: FooterItemProps) => {
  const location = useLocation()

  const title = useMemo(() => (footerItemType === 'home' ? '홈' : '스크랩'), [footerItemType])
  const size = useMemo(() => (footerItemType === 'home' ? 20 : 24), [footerItemType])

  const color = useMemo(() => {
    if (location.pathname.includes('scrape')) {
      if (footerItemType === 'home') return 'black80'
      return 'white100'
    }

    if (footerItemType === 'home') return 'white100'
    return 'black80'
  }, [footerItemType, location.pathname])

  return (
    <FooterItemContainer>
      <IconBase icon={footerItemType} size={size} color={color} />
      <TextBase text={title} fontSize={10} lineHeight={12} fontWeight={600} color={color} />
    </FooterItemContainer>
  )
}

const FooterItemContainer = styled(FlexBase)`
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`

export default FooterItem
