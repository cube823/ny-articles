import { createSlice } from '@reduxjs/toolkit'

interface FilterModalState {
  filterModalVisible: boolean
}

const initialState: FilterModalState = {
  filterModalVisible: false,
}

export const filterModalSlice = createSlice({
  name: 'filterModalSlice',
  initialState,
  reducers: {
    openModal: (state) => {
      state.filterModalVisible = true
    },
    closeModal: (state) => {
      state.filterModalVisible = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = filterModalSlice.actions

export default filterModalSlice.reducer
