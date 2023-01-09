import { FC } from 'react'
import { WorklogItem } from './WorklogItem/WorklogItem'
import { useWorklogData } from './hooks/useWorklogData'
import s from './WorklogsList.module.scss'
import { NavLink } from 'react-router-dom'
import { PATH } from '../../common/constants/path'
import { WorklogTitle } from './WorklogTitle/WorklogTitle'
import { useAppSelector } from '../../redux-TK/store'

export const WorklogsList: FC = () => {
  const { employeeWorklog } = useWorklogData()

  const worklogs = useAppSelector((state) => state.worklog.worklogs)
  const date = worklogs?.map((elem) => ({
    ...elem,
    from: new Date(elem.from),
    to: new Date(elem.to),
  }))

  console.log(date)

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
