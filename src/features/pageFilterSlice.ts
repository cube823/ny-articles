import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PageState {
  page: number
}

const initialState: PageState = {
  page: 1,
}

export const pageFilterSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    changePage: (state, inputValue: PayloadAction<number>) => {
      state.page = inputValue.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changePage } = pageFilterSlice.actions

export default pageFilterSlice.reducer
