export const changeDateUtil = (date: string) => {
  const newDate = new Date(date)
  return `${('0' + newDate.getDate()).slice(-2)}.${('0' + newDate.getMonth()).slice(
    -2
  )}.${newDate.getFullYear()}`
}
