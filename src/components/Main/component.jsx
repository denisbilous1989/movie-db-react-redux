import { Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import ErrorPage from '../Pages/ErrorPage'
import SearchingMovies from '../Pages/SearchingMovies'
import MovieDetails from '../Pages/MovieDetails'

import './style.scss'


const Main = () => (
  <main className="main">
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search/:search" element={<SearchingMovies />} />
        <Route path="details/:movieId" element={<MovieDetails />} />
        <Route
           path="*"
           element={
              <ErrorPage />
           }
        />
      </Routes>
  </main>
)

export default Main;

