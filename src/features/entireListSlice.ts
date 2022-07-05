import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticleWithInfo } from 'src/types'

interface EntireListState {
  entireList: ArticleWithInfo[]
}

const initialState: EntireListState = {
  entireList: [],
}

export const entireListSlice = createSlice({
  name: 'entireListSlice',
  initialState,
  reducers: {
    addList: (state, inputValue: PayloadAction<ArticleWithInfo>) => {
      state.entireList.push(inputValue.payload)
    },
    initializeList: (state, inputValue: PayloadAction<ArticleWithInfo>) => {
      state.entireList = [inputValue.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { addList, initializeList } = entireListSlice.actions

export default entireListSlice.reducer
