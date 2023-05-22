import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjBiMDBhNjcyNjFkYzQ3OGVmMDc4OTA3NWFkNjkzNCIsInN1YiI6IjY0MzA0MTBmMWY5OGQxMDJhNjJhNzQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GyylvEgSlTgOEq729L-Du0Ex17bLfqxsy8QMZ7C2r7c'
  }
})

const moviesAPI = {

  trendingFilms: () => {
    return instance('trending/all/day?language=en-US');
  },

  oneMovieInformation: id => {
    return instance(`movie/${id}`)
  },

  credits: id => {
    return instance(`movie/${id}/credits`)
  },

  movieOnQuery: query => {
    return instance(`search/movie?query=${query}&include_adult=false&language=en-US&page=1`)
  },

  movieReviews: id => {
    return instance(`movie/${id}/reviews?language=en-US&page=1`)
  }
}

export default moviesAPI;