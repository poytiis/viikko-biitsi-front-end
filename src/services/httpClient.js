import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getNewScores = () => {

  const url = API_URL + 'show_scores.php';
  console.log(url);
  return axios.get(url);
}