import { Link } from 'react-router-dom';

import './style.scss'
const Error = () => {
  return (
    <>
        <h2 className="no_title">There are no films with this title.</h2>
        <Link to='/' className='btn_back'>Back</Link>
    </>
  )
}
export default Error;