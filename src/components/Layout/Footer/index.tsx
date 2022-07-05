import { Link } from 'react-router-dom'
import styled from 'styled-components'
import FlexBase from 'src/components/Cores/FlexBase'
import FooterItem from 'src/components/Layout/Footer/FooterItem'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterPaddingContainer>
        <Link to="/">
          <FooterItem footerItemType="home" />
        </Link>
        <Link to="/scrape">
          <FooterItem footerItemType="scrape" />
        </Link>
      </FooterPaddingContainer>
    </FooterContainer>
  )
}

const FooterContainer = styled(FlexBase)`
  position: fixed;
  bottom: 0;
  align-items: center;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.pallette.black100};
  height: 85px;
  width: 100%;

  border-radius: 30px 30px 0 0;
`

const FooterPaddingContainer = styled(FlexBase)`
  width: 100%;
  justify-content: space-between;

  padding: 0 82px;
`

export default Footer
