import TrandingList from 'components/TrandingList/TrandingList';
import React, { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import moviesAPI from 'services/moviesAPI';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const foo = async () => {
      try {
        const respons = await moviesAPI();
        setMovies(respons.data.results);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    foo();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>

      {movies.length > 0 && <TrandingList movies={movies} />}
      {isLoading && <ColorRing />}
      {error !== '' && <p>{error}</p>}
    </div>
  );
}
