import { BaseSyntheticEvent, useEffect, useState } from 'react';
import css from './MoviesPage.module.css';
import { Movie } from '../../types';
import MovieList from '../../components/movie-list/MovieList';
import { searchMovie } from '../../movie-api';

const MoviesPage = () => {
  const [movies, setMovies] = useState(() => {
    const data = window.localStorage.getItem('movies');
    return data === null
      ? []
      : JSON.parse(data);
  });
  const [totalPages, setTotalPages] = useState(1);
  const [requestedPage, setRequestedPage] = useState(1);
  const [searchValue, setSearchValue] = useState(() => {
    const data = window.localStorage.getItem('query');
    return data === null
      ? ''
      : JSON.parse(data);
  });

  useEffect(() => {
    window.localStorage.setItem('query', JSON.stringify(searchValue));
  }, [searchValue])

  useEffect(() => {
    window.localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies])

  const handleSubmit = async (evt: BaseSyntheticEvent) => {
    evt.preventDefault();
    const form = evt.target;
    const searchFilm = form.elements.search.value;
    setSearchValue(searchFilm);
    setRequestedPage(2);
    const response = await searchMovie(searchFilm, 1);
    setTotalPages(response.total_pages);
    setMovies(response.results);
    
    form.reset();
  }

  const handleLoadMore = async () => {
    const response = await searchMovie(searchValue, requestedPage);
    setMovies((prevMovies: Movie[]) => [...prevMovies, ...response.results]);
    setRequestedPage(requestedPage + 1);
  }

  return (
    <>
      <form className={css.searchWrapper} onSubmit={handleSubmit}>
        <input type='text' name='search' className={css.searchField} required/>
        <button type='submit' className={css.searchButton}>Search</button>
      </form>
      <MovieList movies={movies} />
      {movies.length > 0 && requestedPage <= totalPages &&
        <button type='button' onClick={handleLoadMore} className={css.loadMoreBtn}>
          Load more
        </button>
      }
    </>

  )
}

export default MoviesPage;