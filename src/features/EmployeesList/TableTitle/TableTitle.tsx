import { FC } from 'react'
import s from '../../../common/styles/Table.module.scss'

export const TableTitle: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.cellTitle}>Фамилия</div>
      <div className={s.cellTitle}>Имя</div>
      <div className={s.cellTitle}>Отчество</div>
      <div className={s.cellTitle}>Дата рождения</div>
      <div className={s.cellTitle}>Телефон</div>
    </div>
  )
}
