import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cast from 'components/Cast/Cast';
import Layout from 'components/Layout/Layout';
import Reviews from 'components/Reviews/Reviews';
const Home = lazy(() => import('pages/Home'));
const OneMovie = lazy(() => import('pages/OneMovie'));
const Movies = lazy(() => import('pages/Movies'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<OneMovie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
