import { useEffect, useMemo } from "react"
import useSearchParams from "./hooks/useSearchParams"

function Detail() {
  const { getAllSearchParamsValue, getSearchParamsValue, updateSearchParams, resetSearchParams, generateRandomSearchParams } = useSearchParams()

  const data = getAllSearchParamsValue()

  return (
    <div className="flex flex-col">
      <div>DeTail</div>
      <div>
        <span>{data.name}</span>
        <span>{data.food}</span>
        <span>{data.place}</span>
        <span>{data.information}</span>
        <span>{data.information}</span>
      </div>
      <div>
        <button className='px-5 py-2 bg-teal-400 ring-emerald-300 rounded-lg mr-1 my-2 text-white' onClick={resetSearchParams}>RESET</button>
        <button className='px-5 py-2 bg-teal-400 ring-emerald-300 rounded-lg mr-1 my-2 text-white' onClick={() => generateRandomSearchParams()}>UPDATE</button>
      </div>
    </div>
  )
}

export default Detail