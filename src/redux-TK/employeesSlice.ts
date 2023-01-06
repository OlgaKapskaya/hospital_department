import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getEmployees } from '../api/api'

export interface EmployeeType {
  id: number
  firstName: string
  lastName: string
  middleName: string
  birthDate: string
  phone: string
}

interface EmployeesStateType {
  employees: EmployeeType[]
}

export const getEmployeesTC = createAsyncThunk('employees/getEmployees', async () => {
  const response = await getEmployees()
  return response
})

export const employeesSlice = createSlice({
  name: 'employees',
  initialState: {} as EmployeesStateType,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEmployeesTC.fulfilled, (state: EmployeesStateType, action) => {
      state.employees = action.payload
    })
  },
})
