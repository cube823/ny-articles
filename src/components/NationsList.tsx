import { useCallback, useMemo } from 'react'
import FlexBase from 'src/components/Cores/FlexBase'
import TextBase from 'src/components/Cores/TextBase'
import { Nation } from 'src/types'
import styled from 'styled-components'

const NationsArr: Nation[] = [
  { label: '대한민국', value: 'South Korea' },
  { label: '중국', value: 'China' },
  { label: '일본', value: 'Japan' },
  { label: '미국', value: 'U.S.' },
  { label: '북한', value: 'North Korea' },
  { label: '러시아', value: 'Russia' },
  { label: '프랑스', value: 'France' },
  { label: '영국', value: 'England' },
]

interface NationsListProps {
  currentNations: Nation[]
  onChangeNations: (nation: Nation) => void
}

const NationsList = ({ currentNations, onChangeNations }: NationsListProps) => {
  return (
    <NationsContainer>
      {NationsArr.map((n) => (
        <NationItem
          nation={n}
          currentNations={currentNations}
          onChangeNations={onChangeNations}
          key={n.value}
        />
      ))}
    </NationsContainer>
  )
}

interface NationItemProps {
  nation: Nation
  currentNations: Nation[]
  onChangeNations: (nation: Nation) => void
}

const NationItem = ({ nation, currentNations, onChangeNations }: NationItemProps) => {
  const isSelected = useMemo(
    () => currentNations.some((n) => n.value === nation.value),
    [currentNations, nation.value],
  )

  const addOrRemoveNation = useCallback(() => {
    onChangeNations(nation)
  }, [nation, onChangeNations])

  return (
    <NationItemContainer isSelected={isSelected} onClick={addOrRemoveNation}>
      <TextBase
        text={nation.label}
        color={isSelected ? 'white100' : 'black80'}
        fontSize={14}
        lineHeight={24}
        fontWeight={400}
      />
    </NationItemContainer>
  )
}

const NationsContainer = styled(FlexBase)`
  width: 100%;
  gap: 8px;

  flex-wrap: wrap;
`

const NationItemContainer = styled(FlexBase)<{ isSelected: boolean }>`
  background-color: ${(props) =>
    props.isSelected ? props.theme.pallette.blueSky : props.theme.pallette.white100};
  border: 1px solid ${(props) => props.theme.pallette.white60};
  height: 34px;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  letter-spacing: -0.04em;
  border-radius: 30px;

  cursor: pointer;
`

export default NationsList
