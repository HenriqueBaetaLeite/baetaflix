const url = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://baetaleiteflix.herokuapp.com';

export default {
  url,
};
