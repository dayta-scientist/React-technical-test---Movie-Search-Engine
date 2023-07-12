import { useState } from "react";
import { FetchMovies } from "../services/movies";

export const useMovies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  const getFetch = async ({ search}) => {
    try {
      setLoading(true)
      const newMovies = await FetchMovies({ search })
      setMovies(newMovies)
    } catch (error) {
      throw new Error('Fetching error')
    } finally {
      setLoading(false)
    }
  }

  return { movies, getFetch, loading }
}