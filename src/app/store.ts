import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { articleApi } from 'src/app/useApi'
import headlineFilterReducer from 'src/features/headlineFilterSlice'
import dateFilterReducer from 'src/features/dateFilterSlice'
import glocationsFilterReducer from 'src/features/glocationsFilterSlice'
import pageFilterReducer from 'src/features/pageFilterSlice'
import modalCotrolReducer from 'src/features/filterModalSlice'
import entireListReducer from 'src/features/entireListSlice'

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
    headlineFilter: headlineFilterReducer,
    dateFilter: dateFilterReducer,
    glocationsFilter: glocationsFilterReducer,
    pageFilter: pageFilterReducer,
    modalController: modalCotrolReducer,
    entireListController: entireListReducer,
  },
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
