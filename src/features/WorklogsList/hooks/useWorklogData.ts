import { useAppDispatch, useAppSelector } from '../../../redux-TK/store'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getWorklogsTC } from '../../../redux-TK/worklogSlice'

export const useWorklogData = () => {
  const dispatch = useAppDispatch()
  const params = useParams<{ id: string }>()
  const employeeWorklog = useAppSelector((state) => state.worklog.worklogs)?.filter((elem) =>
    params.id ? elem.employee_id === +params.id : elem
  )
  const employee = useAppSelector((state) => state.employees.employees)?.filter((elem) =>
    params.id ? elem.id === +params.id : elem
  )[0]

  useEffect(() => {
    dispatch(getWorklogsTC())
  }, [])

  return { employee, employeeWorklog }
}
