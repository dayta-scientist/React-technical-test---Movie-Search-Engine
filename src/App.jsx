import { useState } from 'react'
import './App.css'
import responseMovies from "./mocks/with-results.json"
import { useMovies } from './hooks/useMovies'
import { Mapping } from './components/Mapping'

function App() {
  // const movies = responseMovies.Search
  const [search, setSearch] = useState()
  const { movies, getFetch } = useMovies()

  const handleSubmit = (event) => {
    event.preventDefault()
    getFetch({ search })
  }

  const handleChange = (event) => {
    const newMovie = event.target.value 
    setSearch(newMovie)
  }

  return (
    <>
      <div>
        <header>
          <h1>Movie search engine</h1>
          <form className='form' onSubmit={handleSubmit}>
            <label htmlFor="search">Search a film</label>
            <input onChange={handleChange} type="text" placeholder='Avengers, Star Wars...' id='search' />
            <button type='submit'>Search</button>
          </form>
        </header>

        <main>
          <Mapping movies={movies} />
        </main>
      </div>
    </>
  )
}

export default App
