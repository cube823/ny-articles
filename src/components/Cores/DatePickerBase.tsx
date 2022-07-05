import { forwardRef, useRef } from 'react'
import styled from 'styled-components'
import ReactDatePicker from 'react-datepicker'
import TextBase from 'src/components/Cores/TextBase'
import { IconBase } from 'src/components/Icons/IconBase'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'
import 'moment/locale/ko'

interface DatePickerBaseProps {
  selectedDate: Date | null
  onChange: (date: Date | null) => void
}

const DatePickerBase = ({ selectedDate, onChange }: DatePickerBaseProps) => {
  const datePickerRef = useRef<ReactDatePicker>(null)

  return (
    <Wrapper
      onChange={onChange}
      selected={selectedDate}
      customInput={<DatePickerInput timestamp={selectedDate ? selectedDate.getTime() : 0} />}
      ref={datePickerRef}
    />
  )
}

interface DatePickerInputProps {
  timestamp: number
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void
}

export const DatePickerInput = forwardRef<HTMLInputElement, DatePickerInputProps>(
  function datePickerInput({ timestamp, onClick }, ref) {
    const dateStr = formatDate(timestamp)

    return (
      <DateContainer ref={ref} onClick={onClick}>
        <DateTextContainer>
          <TextBase text={dateStr} fontSize={14} lineHeight={24} fontWeight={400} color="gray2" />
        </DateTextContainer>
        <IconBase icon="calendar" />
      </DateContainer>
    )
  },
)

const formatDate = (timestamp: number) =>
  timestamp === 0 ? '날짜를 선택해주세요.' : moment(timestamp).format('YYYY.MM.DD')

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 42px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.pallette.gray2};
  border-radius: 8px;
  padding: 0 20px;
`
const DateTextContainer = styled.div`
  cursor: pointer;
`

const Wrapper = styled(ReactDatePicker)`
  display: flex;
  position: relative;
  height: 42px;
  width: 100%;
`

export default DatePickerBase
