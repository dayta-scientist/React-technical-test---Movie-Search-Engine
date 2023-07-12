import { useState, useEffect, useRef } from "react";

export const useSearch = () => {
  const [search, setSearch] = useState()
  const [error, setError] = useState(null)
  const isFirstInput = useRef()

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if(search?.match(/^\d+$/)  ) {
      setError('Must be strings.')
      return
    }

    if(search?.length < 3) {
      setError('Must be at least 3 characters')
    }

    setError(null)
  }, [search])

  return { search, error, setSearch, setError }

}