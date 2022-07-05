import FlexBase from 'src/components/Cores/FlexBase'
import HeaderItem from 'src/components/Layout/Header/HeaderItem'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderPaddingContainer>
        <HeaderItem headerType="headline" />
        <HeaderItem headerType="calendar" />
        <HeaderItem headerType="nation" />
      </HeaderPaddingContainer>
    </HeaderContainer>
  )
}

const HeaderContainer = styled(FlexBase)`
  background-color: ${(props) => props.theme.pallette.white100};
  height: 3.75rem;
  flex-shrink: 0;
  width: 100%;

  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.pallette.gray2};
`

const HeaderPaddingContainer = styled(FlexBase)`
  width: 100%;
  align-items: center;
  gap: 6px;
  padding: 0 0 0 20px;
`

export default Header
