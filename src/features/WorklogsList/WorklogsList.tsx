import { FC } from 'react'
import { WorklogItem } from './WorklogItem/WorklogItem'
import { useWorklogData } from './hooks/useWorklogData'

export const WorklogsList: FC = () => {
  const { employee, employeeWorklog } = useWorklogData()

  return (
    <div>
      {employee && (
        <div>
          Рабочий табель врача:
          <div>
            {employee.lastName} {employee.firstName} {employee.middleName}
          </div>
        </div>
      )}
      {employeeWorklog && employeeWorklog.map((elem) => <WorklogItem key={elem.id} item={elem} />)}
    </div>
  )
}
