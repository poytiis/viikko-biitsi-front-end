import axios from 'axios';

const apiURL = 'https://www.jklbeach.fi/';
console.log(apiURL);

const fakeAPI = 'https://wwww.google.com';

console.log(fakeAPI);

export const getNewScores = () => {


  const url = apiURL + 'show_scores.php';
  console.log(url);
  return axios.get(url);
}

export const putScores = (data) => {

  const url = apiURL + 'update_scores.php';
  console.log(url);
  return axios.post(url, data);

}

export const downloadRankings = (serie) => {

   const url = serie === 'men'
     ? apiURL + 'download_ranking.php?serie=men'
     : apiURL + 'download_ranking.php?serie=women';
   return axios.get(url);
}