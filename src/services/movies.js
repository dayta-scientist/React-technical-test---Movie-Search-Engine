const API_KEY = process.env.REACT_APP_API_KEY;


export const FetchMovies = async ({search}) => {
  if (search === '') return null

  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
      )
    if (!response.ok) {
      throw new Error('API not found')
    }
    const json = await response.json()
    const movies = json.Search
    return movies?.map(movie => (
      {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster 
      }
  ))
  } catch (error) {
    throw new Error('Error searching movies')
  }
  
}

