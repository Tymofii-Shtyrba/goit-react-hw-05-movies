import SearchForm from 'components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import moviesAPI from 'services/moviesAPI';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(searchParams.get('query') || '');

  useEffect(() => {
    if (query === '') return;

    const getData = async () => {
      try {
        const response = await moviesAPI.movieOnQuery(query);
        setMovies(response.data.results);
      } catch (error) {}
    };
    getData();
  }, [query]);

  const onSearch = e => {
    e.preventDefault();
    const newQuery = e.target.elements.query.value;

    if (newQuery === '' || newQuery === query) return;

    setQuery(newQuery);
    setSearchParams({ query: newQuery });
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
