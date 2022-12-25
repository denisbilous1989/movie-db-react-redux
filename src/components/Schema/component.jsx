import * as yup from 'yup';


const validateSchema = yup.object().shape({
  searchingMovies: yup
  .string()
  .min(3, 'Movie title must contain at least 3 letters')
  .required('Required'),
})

export default validateSchema;