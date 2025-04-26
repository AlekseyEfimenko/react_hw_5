import React from "react";
import { Movie } from "../../types";
import css from './MovieList.module.css';
import { NavLink, useLocation } from "react-router-dom";

type Props = {
  movies: Movie[]
}

const MovieList: React.FC<Props> = (props) => {
  const { movies } = props;
  const location = useLocation();

  return (
    <ul className={css.movieList}>
      {movies.map(movie => {
        const movieLink = `/movie/${movie.id}`;

        return (
          <li className={css.movieListItem} key={movie.id}>
            <NavLink to={movieLink} state={location}>{movie.title}</NavLink>    
          </li>
        )
      })}
    </ul>
  )
}

export default MovieList;