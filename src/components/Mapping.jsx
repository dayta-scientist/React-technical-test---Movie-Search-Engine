

const ListOfMovies = ({ movies }) => {
  return(
      <ul className="movies">
        {movies?.map(movie => {
      return(
        <li key={movie.id} className="movie">
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.image} alt={movie.title} />
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