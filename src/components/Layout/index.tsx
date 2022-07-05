import { forwardRef, ReactNode } from 'react'
import FlexBase from 'src/components/Cores/FlexBase'
import Footer from 'src/components/Layout/Footer'
import Header from 'src/components/Layout/Header'
import styled from 'styled-components'
import ModalBase from 'src/components/Cores/ModalBase'

interface LayoutProps {
  children: ReactNode
  onScroll?: () => void
}

const Layout = forwardRef<HTMLDivElement, LayoutProps>(function layout(
  { onScroll, children },
  ref,
) {
  return (
    <LayoutContainer ref={ref} onScroll={onScroll}>
      <Header />
      <ContentLayoutContainer>{children}</ContentLayoutContainer>
      <ModalBase />
      <Footer />
    </LayoutContainer>
  )
})

const LayoutContainer = styled(FlexBase)`
  justify-content: flex-start;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.pallette.gray1};
  overflow-y: auto;
`

const ContentLayoutContainer = styled(FlexBase)`
  flex: 1;
  width: calc(100% - 40px);
  padding: 20px;
  justify-content: flex-start;
  flex-direction: column;
  padding-bottom: 105px;
`

export default Layout
