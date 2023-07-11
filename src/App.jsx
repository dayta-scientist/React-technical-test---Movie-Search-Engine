import { useState } from 'react'
import './App.css'
import responseMovies from "./mocks/with-results.json"

function App() {
  const movies = responseMovies.Search
  const [count, setCount] = useState(0)

  return (
    <>
      <body>
        <header>
          <h1>Movie search engine</h1>
          <form className='form'>
            <label htmlFor="search">Search a film</label>
            <input type="text" placeholder='Avengers, Star Wars...' id='search' />
            <button type='submit'>Search</button>
          </form>
        </header>

        <main>
          {movies ?
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
          
          : <p>No movies found</p>
        }
        </main>
      </body>
    </>
  )
}

export default App
