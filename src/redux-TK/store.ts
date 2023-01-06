import { configureStore } from '@reduxjs/toolkit'
import { employeesSlice } from './employeesSlice'
import { worklogSlice } from './worklogSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    employees: employeesSlice.reducer,
    worklog: worklogSlice.reducer,
  },
})

export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

// @ts-ignore
window.store = store
