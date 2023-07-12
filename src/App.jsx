import { useState } from 'react'
import './App.css'
import responseMovies from "./mocks/with-results.json"
import { useMovies } from './hooks/useMovies'
import { Mapping } from './components/Mapping'
import { useSearch } from './hooks/useSearch'

function App() {
  // const movies = responseMovies.Search
  // const [search, setSearch] = useState()
  const { movies, getFetch, loading } = useMovies()
  const { search, error, setSearch } = useSearch()

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
            <input style={{border: '1px solid transparent', borderColor: error ? 'red' : 'transparent'}} onChange={handleChange} type="text" placeholder='Avengers, Star Wars...' id='search' />
            <button type='submit'>Search</button>
          </form>
          {error && <p style={{color: 'red' }}>{error}</p>}
        </header>

        <main>
          {
            loading ? <p>Loading ...</p> : <Mapping movies={movies} />
          }
          
        </main>
      </div>
    </>
  )
}

export default App
