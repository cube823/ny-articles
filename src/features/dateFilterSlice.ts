import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DateState {
  date: string
}

const initialState: DateState = {
  date: '',
}

export const dateFilterSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    changeDate: (state, inputValue: PayloadAction<string>) => {
      state.date = inputValue.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeDate } = dateFilterSlice.actions

export default dateFilterSlice.reducer
