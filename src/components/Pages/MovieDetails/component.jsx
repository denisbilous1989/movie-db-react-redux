import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { ProgressBar } from  'react-loader-spinner'

import useGetData from '../../hooks/useGetData'
import { generateUrl, generateBackgroundImgUrl, generateImgUrl, generateDate, getColor, generatePopularity } from "../../helpers/helpers";

import { setMovieDetails, clearMovieDetails } from '../../../store/MovieDetails/actions'
import { selectDetails } from '../../../store/selector'

import Error from '../Home/Error';

import './style.scss'

const MovieDetails = ({ details, setMovieDetails, clearMovieDetails }) => {
  const { movieId } = useParams()

  const { data, error, loading } = useGetData(generateUrl(`movie/${movieId}`))
  const navigate = useNavigate()

  useEffect(() => {
    if(!error && !loading && data) {
      setMovieDetails(data)
    }

    return () => {
      clearMovieDetails()
    }
  }, [error, loading, data])

  const handleSubmit =() => {
    navigate('/')
  }



  return (
    <>
   {error || data.success === false
      ? <Error />
      : ''
    }

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

    {Object.keys(details).length !==0 && details
    ? (
       <div 
         className='details'
         style={{
           backgroundImage: `url(${generateBackgroundImgUrl(details.backdrop_path)})`,
          }}>
           <img src={generateImgUrl(details.poster_path)} alt={`${details.original_title}`}/>
           <div className='movie_content'>
              <div className="date">{generateDate(details.release_date)}</div>
              <div className="title">{details.original_title}</div>
              <div className="overview">{details.overview}</div>
              <div className={'raiting ' + getColor(details.vote_average)}> <span>{generatePopularity(details.vote_average)}</span></div>
              <button className="btn" onClick={handleSubmit}>Back to Home</button>
           </div>
       </div>
      )
    : ''
    }
    </>

  )
}

const mapStateToProps = state => {
  return {
    details: selectDetails(state)
  }
}

const mapDispatchToProps = {
  setMovieDetails,
  clearMovieDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)