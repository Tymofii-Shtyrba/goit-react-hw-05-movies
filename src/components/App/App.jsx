import Layout from 'components/Layout/Layout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import OneMovie from 'pages/OneMovie';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import moviesAPI from 'services/moviesAPI';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<OneMovie />} />
      </Route>
    </Routes>
  );
};
