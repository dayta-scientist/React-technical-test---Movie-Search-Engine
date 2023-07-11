import { useState } from "react";
import { FetchMovies } from "../services/movies";

export const useMovies = () => {
  const [movies, setMovies] = useState([])

  const getFetch = async ({ search}) => {
    const newMovies = await FetchMovies({ search })
    setMovies(newMovies)
  }

  return { movies, getFetch}
}