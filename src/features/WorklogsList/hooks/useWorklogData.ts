import { useAppSelector } from '../../../redux-TK/store'
import { useParams } from 'react-router-dom'

export const useWorklogData = () => {
  const params = useParams<{ id: string }>()
  const employees = useAppSelector((state) => state.employees.employees)
  const worklogs = useAppSelector((state) => state.worklog.worklogs)
  const employeeWorklog = worklogs?.filter((elem) =>
    params.id ? elem.employee_id === +params.id : elem
  )
  const employee = employees?.filter((elem) => (params.id ? elem.id === +params.id : elem))[0]
  const employeesCount = employees.length

  return { employee, employeeWorklog, employeesCount }
}
