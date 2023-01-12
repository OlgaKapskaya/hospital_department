import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getWorklog } from '../api/api'
import { getErrorsIdArray } from '../common/utils/getErrorsIdArray'

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

export const getWorklogsTC = createAsyncThunk('worklogs/getWorklogs', async (count: number) => {
  const response = await getWorklog()
  const errors = getErrorsIdArray(response, count)
  return response.map((elem: Worklog) =>
    errors?.includes(elem.id)
      ? {
          ...elem,
          withError: true,
        }
      : {
          ...elem,
          withError: false,
        }
  )
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
