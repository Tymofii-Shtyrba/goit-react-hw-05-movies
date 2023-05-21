import MainMovieInfo from 'components/MainMovieInfo/MainMovieInfo';
import React, { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { Link, Outlet, useParams } from 'react-router-dom';
import moviesAPI from 'services/moviesAPI';

export default function OneMovie() {
  const [movieInform, setMovieInform] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const getData = async id => {
      try {
        const response = await moviesAPI.oneMovieInformation(id);
        setMovieInform(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    getData(movieId);
  }, [movieId]);

  return (
    <div>
      <button>Go back</button>
      {isLoading ? (
        <ColorRing />
      ) : (
        error === '' && <MainMovieInfo movieInform={movieInform} />
      )}
      {error !== '' && <p>{error}</p>}
      <section>
        <h2>Aditional information</h2>
        <ul>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </section>
    </div>
  );
}
