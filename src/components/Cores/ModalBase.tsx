import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'src/app/store'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { closeModal } from 'src/features/filterModalSlice'
import FlexBase from 'src/components/Cores/FlexBase'
import TextBase from 'src/components/Cores/TextBase'
import DatePickerBase from 'src/components/Cores/DatePickerBase'
import NationsList from 'src/components/NationsList'

import { changeDate } from 'src/features/dateFilterSlice'
import { changeGlocations } from 'src/features/glocationsFilterSlice'
import { changeHeadline } from 'src/features/headlineFilterSlice'
import moment from 'moment'
import { Nation } from 'src/types'

const ModalBase = () => {
  const ref = useRef<HTMLDialogElement>(null)

  const filterModalVisible = useSelector(
    (state: RootState) => state.modalController.filterModalVisible,
  )

  const dispatch = useDispatch()
  const onClose = useCallback(() => dispatch(closeModal()), [dispatch])

  const [currentHeadline, setCurrentHeadline] = useState<string>('')
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [currentNations, setCurrentNations] = useState<Nation[]>([])

  const onChangeHeadline = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCurrentHeadline(e.target.value)
  }, [])

  const onChangeDate = useCallback((date: Date | null) => {
    setSelectedDate(date)
  }, [])

  const onChangeNations = useCallback(
    (nation: Nation) => {
      const currentNation = currentNations.find((n) => n.value === nation.value)
      if (currentNation) {
        setCurrentNations((nations) => {
          const newNations = nations.slice()
          return newNations.filter((n) => n.value !== nation.value)
        })

        return
      }

      setCurrentNations((nations) => {
        const newNations = nations.slice()
        newNations.push(nation)
        return newNations
      })
    },
    [currentNations],
  )

  const submit = useCallback(() => {
    dispatch(changeHeadline(currentHeadline))

    if (selectedDate) {
      const dateString = moment(selectedDate?.getTime()).format('YYYYMMDD')
      dispatch(changeDate(dateString))
    }

    dispatch(changeGlocations(currentNations))
    onClose()
  }, [currentHeadline, currentNations, dispatch, onClose, selectedDate])

  const preventAutoClose = (e: React.MouseEvent) => e.stopPropagation()

  useEffect(() => {
    if (filterModalVisible) {
      ref.current?.showModal()
    } else {
      ref.current?.close()
    }
  }, [filterModalVisible])

  return (
    <DialogContainer
      ref={ref}
      onClick={onClose}
      style={!filterModalVisible ? { display: 'none' } : undefined}
    >
      <DialogContentContainer onClick={preventAutoClose}>
        <DialogItemContainer>
          <TextBase
            text="헤드라인"
            fontSize={16}
            lineHeight={24}
            fontWeight={600}
            color="black100"
          />
          <InputContainer
            placeholder="검색하실 헤드라인을 입력해주세요."
            value={currentHeadline}
            onChange={onChangeHeadline}
          />
        </DialogItemContainer>

        <DialogItemContainer>
          <TextBase text="날짜" fontSize={16} lineHeight={24} fontWeight={600} color="black100" />
          <DatePickerBase selectedDate={selectedDate} onChange={onChangeDate} />
        </DialogItemContainer>

        <DialogItemContainer>
          <TextBase text="국가" fontSize={16} lineHeight={24} fontWeight={600} color="black100" />
          <NationsList currentNations={currentNations} onChangeNations={onChangeNations} />
        </DialogItemContainer>

        <SubmitButton onClick={submit}>필터 적용하기</SubmitButton>
      </DialogContentContainer>
    </DialogContainer>
  )
}

const DialogContainer = styled.dialog`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 75px);
  height: 50%;
  top: 25%;
  bottom: 25%;
  padding: 20px;

  background-color: ${(props) => props.theme.pallette.white100};
  border-radius: 16px;
  border: 0;

  ::backdrop {
    background-color: ${(props) => props.theme.pallette.black100};
    opacity: 0.5;
  }
`

const DialogContentContainer = styled(FlexBase)`
  flex-direction: column;
  flex: 1;
  width: 100%;
  gap: 40px;
`

const DialogItemContainer = styled(FlexBase)`
  flex-direction: column;
  gap: 8px;
  width: calc(100% - 40px);
  lettter-spacing: -0.05em;
`

const InputContainer = styled.input`
  height: 42px;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.pallette.gray2};
  border-radius: 8px;

  ::placeholder {
    color: ${(props) => props.theme.pallette.gray2};
    font-weight: 400;
  }
`

const SubmitButton = styled.button`
  flexshrink: 0;
  border-radius: 16px;
  width: 100%;
  height: 60px;
  border: 0;
  background-color: ${(props) => props.theme.pallette.blueMain};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.pallette.white100};
  cursor: pointer;
`

export default ModalBase
