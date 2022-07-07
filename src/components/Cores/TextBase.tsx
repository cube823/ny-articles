import { Color } from 'src/components/Icons/IconBase'
import styled from 'styled-components'

interface TextCssProps {
  fontSize: number
  lineHeight: number
  color: Color
  fontWeight: number
}

interface TextBaseProps extends TextCssProps {
  text: string
}

const TextBase = ({ fontSize, lineHeight, color, fontWeight, text }: TextBaseProps) => {
  return (
    <TextBaseContainer
      fontSize={fontSize}
      lineHeight={lineHeight}
      color={color}
      fontWeight={fontWeight}
    >
      {text}
    </TextBaseContainer>
  )
}

const TextBaseContainer = styled.div<TextCssProps>`
  line-height: 100%;
  font-family: inherit;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight}px;
  color: ${(props) => props.theme.pallette[props.color]};
`

export default TextBase
