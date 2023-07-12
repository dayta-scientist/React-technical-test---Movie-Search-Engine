import { useRef, useState } from "react";
import { FetchMovies } from "../services/movies";

export const useMovies = ({ search, sort }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const previousSearch = useRef(search)

  const getFetch = async ({ search}) => {
    if(search === previousSearch.current) return

    try {
      setLoading(true)
      previousSearch.current = search
      const newMovies = await FetchMovies({ search })
      setMovies(newMovies)
    } catch (error) {
      throw new Error('Fetching error')
    } finally {
      setLoading(false)
    }
  }

  const sortedMovies = sort
  ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  : movies

  return { movies: sortedMovies, getFetch, loading }
}