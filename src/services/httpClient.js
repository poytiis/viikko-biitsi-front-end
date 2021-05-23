import axios from 'axios';

const apiURL = 'https://www.jklbeach.fi/';

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

export const deletePoolAjax = (postId) => {
  const url = apiURL + 'delete_pool.php?post_id=' + postId;
  return axios.get(url);
}

export const calculateNewRankingAjax = () => {
  const url = apiURL + 'laske_tulokset.php';
  return axios.get(url);
}