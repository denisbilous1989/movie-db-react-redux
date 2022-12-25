import {generateImgUrl, generateDate} from '../../../helpers/helpers'
import { useNavigate, useParams } from "react-router-dom";

import './style.scss'

const SearchingMovie = ({movie}) => {
  const {id, overview, poster_path, original_title, release_date} = movie;

  const navigate = useNavigate()

  const params = useParams()

  const handleSubmit =() => {
    navigate(`/details/${id}`)
  }

  return (
    <li 
     key={id}
     className='searching_movie'
    >
         <img src={generateImgUrl(poster_path)} alt={`${original_title}`}/>
         <div className="movie_content">
            <h4 className="title">{original_title}</h4>
            <div className="date">{generateDate(release_date)}</div>
            <div className="overview">{overview}</div>
            <button className="btn" onClick={handleSubmit}>Details</button>
         </div>
    </li>
  )
}

export default SearchingMovie;