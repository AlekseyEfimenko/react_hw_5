export interface Movie {
  id: number;
  title: string;
}

type Genre = {
  name: string;
}

export interface MovieDetails {
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  genres: Genre[]
}

export interface Actor {
  character: string;
  name: string;
  profile_path: string;
}

export interface Review {
  author: string;
  content: string;
  id: string;
}