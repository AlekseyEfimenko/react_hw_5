import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";
axios.defaults.headers["Authorization"] = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjkwMDAyNTJmNGIxZjFjMjZiZDc3MDU1NDU0NWRmMSIsIm5iZiI6MTc0NDg5OTAzOC4xMjcsInN1YiI6IjY4MDEwYmRlZGU1ZTRkZWM2MmFmMDVjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dokRvxE73AuPxLaJeUBNTuryzP77N5ubKNXXO37rKf4";
axios.defaults.headers["accept"] = " application/json";

export const getTrendingMovies = async () => {
  const response = axios.get("/3/trending/movie/day?language=en-US'");
  return (await response).data.results;
}

export const getMovieDetails = async (id: string) => {
  const response = axios.get(`/3/movie/${id}`);
  return (await response).data;
}

export const getMovieCredits = async (id: string) => {
  const response = axios.get(`/3/movie/${id}/credits`);
  return (await response).data.cast;
}

export const getMovieReviews = async (id: string) => {
  const response = axios.get(`/3/movie/${id}/reviews`);
  return (await response).data.results;
}

export const searchMovie = async (name: string, page: number) => {
  const response = (await axios.get('/3/search/movie', {
    params: {
      query: name,
      page: page
    }
  }));
  return response.data;
}