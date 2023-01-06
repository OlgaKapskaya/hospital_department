import { FC } from 'react'
import { WorklogType } from '../../../redux-TK/worklogSlice'
import s from '../../../common/styles/Table.module.scss'

interface WorklogItemProps {
  item: WorklogType
}

export const WorklogItem: FC<WorklogItemProps> = ({ item }) => {
  return (
    <div className={s.container}>
      <div className={s.cell}>{item.from}</div>
      <div className={s.cell}>{item.to}</div>
    </div>
  )
}
