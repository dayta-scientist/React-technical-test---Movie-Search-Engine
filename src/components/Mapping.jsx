/* eslint-disable react/prop-types */

const ListOfMovies = ({ movies }) => {
  return(
      <ul>
        {movies?.map(movie => {
      return(
        <li key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </li>
      )
    })}
      </ul>
    )
}

const NoMovies = () => {
  return(
    <p>No movies found for this search</p>
  )
}

export const Mapping = ({ movies }) => {
  const hasMovies = movies.length > 0
  return(
    hasMovies
    ? <ListOfMovies movies={movies} />
    : <NoMovies />
  )
}