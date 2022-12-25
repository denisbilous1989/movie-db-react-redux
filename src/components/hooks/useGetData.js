import { useEffect, useState } from "react"

const useGetData = (url, deps=[]) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);

    fetch(url)
    .then(resp => resp.json())
    .then(setData)
    .catch(setError)
    .finally(() => setLoading(false));
  }, deps)

  return {
    data,
    error,
    loading,
  }
}


export default useGetData;