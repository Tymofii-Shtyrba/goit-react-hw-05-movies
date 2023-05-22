import MainMovieInfo from 'components/MainMovieInfo/MainMovieInfo';
import React, { useEffect, useRef, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import moviesAPI from 'services/moviesAPI';

export default function OneMovie() {
  const [movieInform, setMovieInform] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const prevPath = useRef(location.state?.from);

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

  const goBack = () => {
    navigate(prevPath.current);
  };

  return (
    <div>
      {prevPath.current && (
        <button type="button" onClick={goBack}>
          {' '}
          Go back
        </button>
      )}
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
