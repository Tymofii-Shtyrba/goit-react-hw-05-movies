import axios from "axios";

const moviesAPI = {
  trendingFilms: () => {
    return axios('https://api.themoviedb.org/3/trending/all/day?language=en-US', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjBiMDBhNjcyNjFkYzQ3OGVmMDc4OTA3NWFkNjkzNCIsInN1YiI6IjY0MzA0MTBmMWY5OGQxMDJhNjJhNzQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GyylvEgSlTgOEq729L-Du0Ex17bLfqxsy8QMZ7C2r7c'
      }
    });
  },

  oneMovieInformation: id => {
    return axios(`https://api.themoviedb.org/3/movie/${id}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjBiMDBhNjcyNjFkYzQ3OGVmMDc4OTA3NWFkNjkzNCIsInN1YiI6IjY0MzA0MTBmMWY5OGQxMDJhNjJhNzQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GyylvEgSlTgOEq729L-Du0Ex17bLfqxsy8QMZ7C2r7c'
      }
    })
  },

  credits: id => {
    return axios(`https://api.themoviedb.org/3/movie/${id}/credits`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjBiMDBhNjcyNjFkYzQ3OGVmMDc4OTA3NWFkNjkzNCIsInN1YiI6IjY0MzA0MTBmMWY5OGQxMDJhNjJhNzQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GyylvEgSlTgOEq729L-Du0Ex17bLfqxsy8QMZ7C2r7c'
      }
    })
  },
  
  movieOnQuery: query => {
    return axios(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjBiMDBhNjcyNjFkYzQ3OGVmMDc4OTA3NWFkNjkzNCIsInN1YiI6IjY0MzA0MTBmMWY5OGQxMDJhNjJhNzQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GyylvEgSlTgOEq729L-Du0Ex17bLfqxsy8QMZ7C2r7c'
      }
    })
  
  },

  movieReviews: id => {
    return axios(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjBiMDBhNjcyNjFkYzQ3OGVmMDc4OTA3NWFkNjkzNCIsInN1YiI6IjY0MzA0MTBmMWY5OGQxMDJhNjJhNzQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GyylvEgSlTgOEq729L-Du0Ex17bLfqxsy8QMZ7C2r7c'
      }
    })
  }
}
export default moviesAPI;