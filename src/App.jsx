import { useState } from 'react'
import './App.css'
import responseMovies from "./mocks/with-results.json"
import { useMovies } from './hooks/useMovies'
import { Mapping } from './components/Mapping'
import { useSearch } from './hooks/useSearch'

function App() {
  // const movies = responseMovies.Search
  // const [search, setSearch] = useState()
  const [sort, setSort] = useState(false)
  const { search, error, setSearch } = useSearch()
  const { movies, getFetch, loading } = useMovies( {search, sort })

  const handleSubmit = (event) => {
    event.preventDefault()
    getFetch({ search })
  }

  const handleChange = (event) => {
    const newMovie = event.target.value 
    setSearch(newMovie)
  }

  const handleSort = () => {
    setSort(prevState => !prevState)
  }

  return (
    <>
      <div>
        <header>
          <h1>Movie search engine</h1>
          <form className='form' onSubmit={handleSubmit}>
            <label htmlFor="search">Search a film</label>
            <input style={{border: '1px solid transparent', borderColor: error ? 'red' : 'transparent'}} onChange={handleChange} type="text" placeholder='Avengers, Star Wars...' id='search' />
            
            <input type="checkbox" onChange={handleSort} checked={sort} />
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
