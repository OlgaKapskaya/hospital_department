import { getErrorsIdArray } from '../../../common/utils/getErrorsIdArray'
import { useAppSelector } from '../../../redux-TK/store'
import { useMemo } from 'react'

export const useWorklogsWithError = () => {
  const employees = useAppSelector((state) => state.employees.employees)
  const worklogs = useAppSelector((state) => state.worklog.worklogs)

  const arrayOfErrorsID = useMemo(() => {
    return getErrorsIdArray(worklogs, employees.length)
  }, [])
  console.log(arrayOfErrorsID?.sort((a, b) => a - b))

  return arrayOfErrorsID
}
