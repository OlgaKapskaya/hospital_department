import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux-TK/store'
import { getEmployeesTC } from '../../redux-TK/employeesSlice'
import { Employee } from './Employee/Employee'
import { TableTitle } from './TableTitle/TableTitle'

export const EmployeesList: FC = () => {
  const dispatch = useAppDispatch()
  const employees = useAppSelector((state) => state.employees.employees)

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
