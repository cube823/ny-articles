import FlexBase from 'src/components/Cores/FlexBase'
import TextBase from 'src/components/Cores/TextBase'
import { IconBase } from 'src/components/Icons/IconBase'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const EmptyPage = () => {
  return (
    <CenterContainer>
      <TextContainer>
        <IconBase icon="empty-scrape" size={27} height={36} />
        <TextBase
          text="저장된 스크랩이 없습니다."
          fontSize={18}
          lineHeight={28}
          color="black80"
          fontWeight={600}
        />
      </TextContainer>
      <Link to="/">
        <NavigationButton>
          <TextBase
            text="스크랩 하러 가기"
            fontWeight={600}
            fontSize={16}
            lineHeight={24}
            color="white100"
          />
        </NavigationButton>
      </Link>
    </CenterContainer>
  )
}

const CenterContainer = styled(FlexBase)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  letter-spacing: -0.05em;
`

const TextContainer = styled(FlexBase)`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  letter-spacing: -0.05em;
`

const NavigationButton = styled.button`
  width: 295px;
  height: 60px;
  background: ${(props) => props.theme.pallette.blueMain};
  border-radius: 16px;

  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default EmptyPage
