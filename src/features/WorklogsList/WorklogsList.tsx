import { FC, useEffect } from 'react'
import { WorklogItem } from './WorklogItem/WorklogItem'
import { useWorklogData } from './hooks/useWorklogData'
import s from './WorklogsList.module.scss'
import { NavLink } from 'react-router-dom'
import { PATH } from '../../common/constants/path'
import { WorklogTitle } from './WorklogTitle/WorklogTitle'
import { getWorklogsTC } from '../../redux-TK/worklogSlice'
import { useAppDispatch } from '../../redux-TK/store'

export const WorklogsList: FC = () => {
  const { employeeWorklog, employeesCount } = useWorklogData()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getWorklogsTC(employeesCount))
  }, [])

  return (
    <div className={s.worklogsListContainer}>
      <NavLink to={PATH.employees} className={s.linkButton}>
        Back
      </NavLink>
      <WorklogTitle />
      {employeeWorklog?.map((elem) => (
        <WorklogItem key={elem.id} item={elem} />
      ))}
    </div>
  )
}
