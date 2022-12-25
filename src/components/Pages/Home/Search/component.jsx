import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

import validateSchema from '../../../Schema';

import './style.scss';


const SearchForm = () => {

  const [searchingMovies, setSearchingMovies] = useState('');
  const navigate = useNavigate();


  const initialValues = {
    searchingMovies: searchingMovies,
  };

    const handleSubmit = ( values, { resetForm }) => {
      navigate(`/search/${searchingMovies}`)
      resetForm();
    }

    const handleChange = e => {
      if(e.target.value.length < 3) {
        return
      } else {
        setSearchingMovies(e.target.value);
      }
    }


  return (
    <div className="search_movies">
      <div className="container">
        <div className="content_wrapp">
          <div className="content_title">
            <h2>Welcome</h2>
            <h3>Millions of movies, series and people. Explore now.</h3>
          </div>
          <div className="content_serch">

          <Formik
             initialValues={initialValues}
             validationSchema={validateSchema}
             onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className='search_form' onChange={handleChange}>
                <Field 
                 className='input'
                 type="input"
                 name="searchingMovies"
                 placeholder='Search any movie'
                 />
                <ErrorMessage className='error' name="searchingMovies" component="div" />
                   <button 
                     className='btn'
                     type="submit"
                     disabled={isSubmitting}
                     >
                     Submit
                   </button>
              </Form>
            )}
          </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchForm;