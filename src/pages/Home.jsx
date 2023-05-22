import TrandingList from 'components/TrandingList/TrandingList';
import React, { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { useLocation } from 'react-router-dom';
import moviesAPI from 'services/moviesAPI';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await moviesAPI.trendingFilms();
        setMovies(response.data.results);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {isLoading ? (
        <ColorRing />
      ) : (
        error === '' && <TrandingList movies={movies} location={location} />
      )}
      {error !== '' && <p>{error}</p>}
    </div>
  );
}
