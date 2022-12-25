import { API_KEY, API, IMG_URL, BACKGROUND_IMG_URL } from "../constants";

export const generateUrl = path => `${API}${path}?api_key=${API_KEY}`;
export const generateImgUrl = path => `${IMG_URL}${path}`;
export const generateBackgroundImgUrl = path => `${BACKGROUND_IMG_URL}${path}`;
export const generateDate = date => new Date(date).toDateString();
export const generatePopularity = popularity => Math.round(popularity * 10);
export const generateTitle = str => {
  let newStr = str.slice(6);
  return (newStr[0].toUpperCase() + newStr.slice(1)).replace(/_/g, ' ');
  }
export const generateClassName = str => str.slice(6);
export const getColor = vote => {
  if(vote >= 7) {
    return 'green';
  } else if(vote >= 4) {
    return 'orange';
  } else {
    return 'red';
  }
}
