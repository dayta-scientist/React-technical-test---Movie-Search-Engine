import { useState } from 'react'
import './App.css'
import responseMovies from "./mocks/with-results.json"
import { Mapping } from './components/Mapping'

function App() {
  const movies = responseMovies.Search
  const [count, setCount] = useState(0)

  return (
    <>
      <body>
        <header>
          <h1>Movie search Engine</h1>
          <form className='form'>
            <label htmlFor="search">Search a film</label>
            <input type="text" placeholder='Avengers, Star Wars...' id='search' />
            <button type='submit'>Search</button>
          </form>
        </header>

        <main>
          <Mapping movies={movies} />
        </main>
      </body>
    </>
  )
}

export default App
