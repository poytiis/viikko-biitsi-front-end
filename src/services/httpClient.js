import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getNewScores = () => {
  console.log(API_URL)

  return axios.get(API_URL + 'newScores');
}