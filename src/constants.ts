export const DETAIL_INIT = {
  name: '이봉구',
  place: 'incheon-city',
  food: ["chicken", "pig-foot"],
  information: {"a": 1, "b": 2},
}

export const objToSearchParmas =<T extends object> (obj: T) => {
  if(!obj) return ''

  const qp = Object.entries(obj).map(([key, value], index) => (
    `${key}=${value}`
  ))
  .join('&')

  return qp
}