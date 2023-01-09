import { FC } from 'react'
import { WorklogType } from '../../../redux-TK/worklogSlice'
import s from '../../../common/styles/Table.module.scss'
import { useWorklogData } from '../hooks/useWorklogData'

interface WorklogItemProps {
  item: WorklogType
}

export const WorklogItem: FC<WorklogItemProps> = ({ item }) => {
  const { arrayOfErrorsID } = useWorklogData()
  const containerClassName = arrayOfErrorsID?.includes(item.id) ? s.errorContainer : s.container
  return (
    <div className={containerClassName}>
      <div className={s.cell}>{item.from}</div>
      <div className={s.cell}>{item.to}</div>
    </div>
  )
}
