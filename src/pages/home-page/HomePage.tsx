import css from './HomePage.module.css';
import MovieList from '../../components/movie-list/MovieList';
import { getTrendingMovies } from '../../movie-api';
import { useEffect, useState } from 'react';
import { Movie } from '../../types';

const HomePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const result = await getTrendingMovies();
      setMovies(result);
    }

    getMovies();
  }, [])

  return (
    <div className={css.contentWrapper}>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  )
}

export default HomePage;