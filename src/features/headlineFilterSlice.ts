import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface HeadlineState {
  headline: string
}

const initialState: HeadlineState = {
  headline: '',
}

export const headlineFilterSlice = createSlice({
  name: 'headline',
  initialState,
  reducers: {
    changeHeadline: (state, inputValue: PayloadAction<string>) => {
      state.headline = inputValue.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeHeadline } = headlineFilterSlice.actions

export default headlineFilterSlice.reducer
