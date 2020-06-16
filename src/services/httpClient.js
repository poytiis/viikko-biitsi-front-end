import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getNewScores = () => {

  const url = API_URL + 'show_scores.php';
  console.log(url);
  return axios.get(url);
}

export const putScores = (data) => {
  const url = API_URL + 'update_scores.php';
  console.log(url);
  return axios.post(url, data);

}

export const downloadRankings = (serie) => {

   const url = serie === 'men'
     ? API_URL + 'download_ranking.php?serie=men'
     : API_URL + 'download_ranking.php?serie=women';
   return axios.get(url);
}