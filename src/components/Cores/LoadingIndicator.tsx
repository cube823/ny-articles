import FlexBase from 'src/components/Cores/FlexBase'
import styled from 'styled-components'

const LoadingIndicator = () => {
  return (
    <MainContainer>
      <LoadingIndicatorContainer />
    </MainContainer>
  )
}

const LoadingIndicatorContainer = styled(FlexBase)`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  animation: spin 1s linear infinite;
  transition-timing-function: linear;

  border-radius: 50%;
  border-style: solid;
  border-top-color: ${(props) => props.theme.pallette.blueMain};
  border-left-color: ${(props) => props.theme.pallette.blueSky};
  border-right-color: ${(props) => props.theme.pallette.blueSky};
  border-bottom-color: ${(props) => props.theme.pallette.blueSky};
  border-width: 20px;
`

const MainContainer = styled(FlexBase)`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`

export default LoadingIndicator
