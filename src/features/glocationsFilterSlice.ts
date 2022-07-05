import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Nation } from 'src/types'

interface GlocationsState {
  glocations: Nation[]
}

const initialState: GlocationsState = {
  glocations: [],
}

export const glocationsFilterSlice = createSlice({
  name: 'glocations',
  initialState,
  reducers: {
    changeGlocations: (state, inputValue: PayloadAction<Nation[]>) => {
      state.glocations = inputValue.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeGlocations } = glocationsFilterSlice.actions

export default glocationsFilterSlice.reducer
