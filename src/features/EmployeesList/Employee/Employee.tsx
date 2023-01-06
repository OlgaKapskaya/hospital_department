import { FC } from 'react'
import { EmployeeType } from '../../../redux-TK/employeesSlice'
import s from '../../../common/styles/Table.module.scss'
import { NavLink } from 'react-router-dom'

interface EmployeeProps {
  employee: EmployeeType
}

export const Employee: FC<EmployeeProps> = ({ employee }) => {
  return (
    <NavLink to={`/worklogs/${employee.id}`}>
      <div className={s.container}>
        <div className={s.cell}>{employee.lastName}</div>
        <div className={s.cell}>{employee.firstName}</div>
        <div className={s.cell}>{employee.middleName}</div>
        <div className={s.cell}>{employee.birthDate}</div>
        <div className={s.cell}>{employee.phone}</div>
      </div>
    </NavLink>
  )
}
