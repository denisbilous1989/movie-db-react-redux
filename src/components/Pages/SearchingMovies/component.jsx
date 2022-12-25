import { ProgressBar } from  'react-loader-spinner'
import { connect } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from 'react'

import { setSearchMovies } from '../../../store/SearchingMovies/actions'
import { selectSearchMovies } from '../../../store/selector';


import { generateUrl } from '../../helpers/helpers'
import useGetData from '../../hooks/useGetData'
import SearchingMovie from '../SearchingMovies/SearchingMovie'
import Error from './Error'

import './style.scss'

const SearchingMovies = ({ searchMovies, setSearchMovies }) => {

  const { search } = useParams()
  const navigate = useNavigate()
  const { data, error, loading } = useGetData(generateUrl('search/movie') + '&query=' + search)


  useEffect(() => {
    if(!error && !loading && data)
    setSearchMovies(data.results);
  }, [data, error, loading]);

  const handleSubmit =() => {
    navigate('/')
  }


  return (
    <>
        {error || data.success === false
          ? <Error />
          : ''}

        {loading 
          ? <ProgressBar
               height="100"
               width="100%"
               ariaLabel="progress-bar-loading"
               wrapperStyle={{}}
               wrapperClass="progress-bar-wrapper"
               borderColor = '#F4442E'
               barColor = '#51E5FF'
            /> 
       : ''
        }

        {searchMovies?.length === 0 ? <Error /> : (
      <div className='container'>
        <ul className='searching_movies'>
            {searchMovies && searchMovies.map(movie => {
              return (
                <SearchingMovie 
                 key={movie.id}
                 movie={movie}
                />
              )
            })}
         </ul>
         <button className="back_btn" onClick={handleSubmit}>Back to Home</button>
      </div>
      )}
    </>
  )
}

const mapStateToProps = state => {
  return {
    searchMovies: selectSearchMovies(state),
  }
}

const mapDispatchToProps = {
  setSearchMovies,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchingMovies);
