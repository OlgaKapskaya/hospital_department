import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getWorklog } from '../api/api'

export interface WorklogType {
  id: number
  employee_id: number
  from: string
  to: string
}

interface WorklogsStateType {
  worklogs: WorklogType[]
}

export const getWorklogsTC = createAsyncThunk('worklogs/getWorklogs', async () => {
  const response = await getWorklog()
  return response
})

export const worklogSlice = createSlice({
  name: 'worklogs',
  initialState: {} as WorklogsStateType,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWorklogsTC.fulfilled, (state, action) => {
      state.worklogs = action.payload
    })
  },
})
