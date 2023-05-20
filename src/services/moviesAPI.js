import axios from "axios";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjBiMDBhNjcyNjFkYzQ3OGVmMDc4OTA3NWFkNjkzNCIsInN1YiI6IjY0MzA0MTBmMWY5OGQxMDJhNjJhNzQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GyylvEgSlTgOEq729L-Du0Ex17bLfqxsy8QMZ7C2r7c'
  }
}

const moviesAPI = () => {
  console.log('send');
  return axios('https://api.themoviedb.org/3/trending/all/day?language=en-US', options);
}

export default moviesAPI;
