import { useAppDispatch, useAppSelector } from '../../../redux-TK/store'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getWorklogsTC } from '../../../redux-TK/worklogSlice'
import { getErrorsIdArray } from '../../../common/utils/getErrorsIdArray'

export const useWorklogData = () => {
  const dispatch = useAppDispatch()
  const params = useParams<{ id: string }>()

  const worklogs = useAppSelector((state) => state.worklog.worklogs)
  const employeeWorklog = worklogs?.filter((elem) =>
    params.id ? elem.employee_id === +params.id : elem
  )
  const employee = useAppSelector((state) => state.employees.employees)?.filter((elem) =>
    params.id ? elem.id === +params.id : elem
  )[0]

  const arrayOfErrorsID = getErrorsIdArray(worklogs)

  useEffect(() => {
    dispatch(getWorklogsTC())
  }, [])

  return { employee, employeeWorklog, arrayOfErrorsID }
}
