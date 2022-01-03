import axios from 'axios';

const topMovieIds = [
  'tt0111161',
  'tt0068646',
  'tt0071562',
  'tt0468569',
  'tt0050083',
  'tt0108052',
  'tt0167260',
  'tt0110912',
  'tt0060196',
  'tt0120737',
];
const TopMovieData = topMovieIds.map((id) =>
  axios.get(`http://www.omdbapi.com/?i=${id}&apikey=67e4ea4e`),
);
export default TopMovieData;
