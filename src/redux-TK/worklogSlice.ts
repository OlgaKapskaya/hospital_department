import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getWorklog } from '../api/api'

export interface Worklog {
  id: number
  employee_id: number
  from: string
  to: string
}

export interface WorklogType extends Worklog {
  withError: boolean
}

interface WorklogsStateType {
  worklogs: WorklogType[]
}

export const getWorklogsTC = createAsyncThunk('worklogs/getWorklogs', async () => {
  const response = await getWorklog()
  return response.map((elem: Worklog) => ({ ...elem, withError: false }))
})

export const worklogSlice = createSlice({
  name: 'worklogs',
  initialState: {} as WorklogsStateType,
  reducers: {
    setWorklogError: (state, action: PayloadAction<number>) => {
      state.worklogs.map((elem) =>
        elem.id === action.payload ? { ...elem, withError: true } : elem
      )
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWorklogsTC.fulfilled, (state, action) => {
      state.worklogs = action.payload
    })
  },
})
