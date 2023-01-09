import { FC } from 'react'
import s from '../WorklogsList.module.scss'
import { useWorklogData } from '../hooks/useWorklogData'

export const WorklogTitle: FC = () => {
  const { employee } = useWorklogData()
  return (
    <div className={s.info}>
      Рабочий табель врача:
      <div className={s.employeeName}>
        {employee?.lastName} {employee?.firstName} {employee?.middleName}
      </div>
    </div>
  )
}
