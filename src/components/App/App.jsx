import Layout from 'components/Layout/Layout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import OneMovie from 'pages/OneMovie';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import moviesAPI from 'services/moviesAPI';

export const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movies.length !== 0) return;
    const foo = async () => {
      const respons = await moviesAPI();
      setMovies(respons.data.results);
    };
    foo();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home movies={movies} />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<OneMovie />} />
      </Route>
    </Routes>
  );
};
