import { WorklogType } from '../../redux-TK/worklogSlice'

export const getErrorsIdArray = (array: WorklogType[]): number[] | undefined => {
  const date = array?.map((elem) => ({
    ...elem,
    from: Date.parse(elem.from),
    to: Date.parse(elem.to),
  }))

  for (let i = 0; i < date?.length; i++) {
    let count = 0
    let temp = []
    for (let j = 0; j < date?.length; j++) {
      //need to fix
      if (date[j].from >= date[i].from && date[j].to <= date[i].to) {
        count++
        if (count === 4) {
          temp.push(date[j].id)
          count = 0
        }
      }
    }
    return temp
  }
}
