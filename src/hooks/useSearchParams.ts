import { useSearchParams as _useSearchParams } from 'react-router-dom'
import { DETAIL_INIT } from '../constants'
import { faker } from '@faker-js/faker'

const convertObjToJson = (obj: object) => {
  const initSearchParams  = Object.entries(obj).reduce((acc: { [key: string]: any}, [key, value]: [string, any]) => {
    acc[key] = JSON.stringify(value)
    return acc 
  }, {})

  return initSearchParams;
}

const useSearchParams = () => {
  const [searchParams, setSearchParams] = _useSearchParams()

  const getAllSearchParamsValue = () => {
    return Object.fromEntries([...searchParams])
  }

  const getSearchParamsValue = (key: string) => {
    if (searchParams.has(key)) {
      return  JSON.parse(getAllSearchParamsValue()[key])
    }
    return undefined;
  }

  const updateSearchParams = (key: string, value: string) => {
    setSearchParams({ ...getAllSearchParamsValue(), [key]: value })
  }

  const generateRandomSearchParams = () => {
    const data = {
      name: faker.name.fullName(),
      place: faker.vehicle.bicycle(),
      food: [faker.company.name(), faker.company.name()],
      information: {"a": faker.address.cityName(), "b": faker.address.cityName()},
    }
    setSearchParams(convertObjToJson(data))
  }

  const resetSearchParams = () => {
    setSearchParams(convertObjToJson(DETAIL_INIT))
  }

  return { searchParams, setSearchParams, getAllSearchParamsValue, updateSearchParams, getSearchParamsValue, resetSearchParams, generateRandomSearchParams }
}

export default useSearchParams;
