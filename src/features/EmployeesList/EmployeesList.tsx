import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux-TK/store'
import { Employee } from './Employee/Employee'
import { TableTitle } from './TableTitle/TableTitle'
import { getEmployeesTC } from '../../redux-TK/employeesSlice'

export const EmployeesList: FC = () => {
  const employees = useAppSelector((state) => state.employees.employees)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getEmployeesTC())
  }, [])

  return (
    <div>
      <TableTitle />
      {employees?.map((employee) => (
        <Employee employee={employee} key={employee.id} />
      ))}
    </div>
  )
}
