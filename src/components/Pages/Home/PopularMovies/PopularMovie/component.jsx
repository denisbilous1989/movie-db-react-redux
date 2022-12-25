import { generateImgUrl, generateDate, getColor, generatePopularity  } from '../../../../helpers/helpers'
import { useNavigate } from 'react-router-dom'

import './style.scss'

const PopularMovie = ({ id, original_title, poster_path, release_date, vote_average }) => {

   const navigate = useNavigate()

   const handleSubmit =() => {
     navigate(`/details/${id}`)
   }

  return (
    <li className='movie'>
         <img src={generateImgUrl(poster_path)} alt="${original_title}"/>
         <div className="movie_content">
            <div className="title">{original_title}</div>
            <div className="date">{generateDate(release_date)}</div>
            <div className={'raiting ' + getColor(vote_average)}> <span>{generatePopularity(vote_average)}</span></div>
         </div>
         <button className='btn' onClick={handleSubmit}>Details</button>
     </li>
  )
}

export default PopularMovie;