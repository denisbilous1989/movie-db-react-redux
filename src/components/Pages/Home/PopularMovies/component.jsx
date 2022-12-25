import { useEffect } from 'react'
import { ProgressBar } from  'react-loader-spinner'
import { connect } from 'react-redux';

import { setPopularMovies } from '../../../../store/PopularMovies/actions'
import { selectPopularMovies } from '../../../../store/selector';

import useGetData from '../../../hooks/useGetData';
import { generateUrl } from '../../../helpers/helpers'
import Error from '../Error'
import PopularMovie from '../PopularMovies/PopularMovie';

import './style.scss'

const PopularMovies =({ popularMovies, setPopularMovies }) => {

  const { data, error, loading } = useGetData(generateUrl('movie/popular'))


  useEffect(() => {
    if(!error && !loading && data) {
      setPopularMovies(data.results);
    }
  }, [data, error, loading]);



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

    {data.length !== 0 && data.results
     ? (
      <>
      <h3>Popular movies</h3>
      <ul className='popular'>
        {popularMovies && popularMovies.map(({ id, poster_path, original_title, release_date, vote_average }) => {
        return (
          <PopularMovie
            key={id}
            id={id}
            poster_path={poster_path}
            original_title={original_title}
            release_date={release_date}
            vote_average={vote_average}
         />
        )
       })}
      </ul>
      </>
      ) 
       : ''
    }
    </>
  )
}

const mapStateToProps = state => ({
    popularMovies: selectPopularMovies(state),
})

const mapDispatchToProps = {
  setPopularMovies,
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularMovies);
