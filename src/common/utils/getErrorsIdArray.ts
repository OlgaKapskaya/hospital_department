import { WorklogType } from '../../redux-TK/worklogSlice'

const DOCTORS_LIMIT = 3

export const getErrorsIdArray = (
  array: WorklogType[],
  countOfDoctors: number
): number[] | undefined => {
  //convert string date in source array to date object
  const dateTransformArray = array
    ?.map((elem) => ({
      ...elem,
      from: new Date(elem.from),
      to: new Date(elem.to),
    }))
    // @ts-ignore
    .sort((a, b) => a.from - b.from)

  let arrayIdWithError = new Set<number>()

  while (dateTransformArray?.length > 0) {
    for (let i = 0; i < dateTransformArray?.length; i++) {
      let count = 0
      for (let j = 1; j < dateTransformArray?.length; j++) {
        //find matching times
        if (
          dateTransformArray[j].from >= dateTransformArray[i].from &&
          dateTransformArray[j].to <= dateTransformArray[i].to
        ) {
          count++
          if (count >= DOCTORS_LIMIT && count <= countOfDoctors) {
            arrayIdWithError.add(dateTransformArray[j].id)
          }
        }
      }
      dateTransformArray.shift()
    }
  }

  // @ts-ignore
  return [...arrayIdWithError]
}
