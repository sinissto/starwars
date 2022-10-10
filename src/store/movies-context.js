import React, { useCallback, useEffect, useState } from "react";

const MoviesContext = React.createContext({
  swMovies: [],
  isLoading: false,
  error: "",
});

export const MoviesContextProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch("https://swapi.dev/api/films/");
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Nesto si sjebao!");
      }

      const transformedMovieData = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });

      setMovies(transformedMovieData);

      // console.log(movies);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <MoviesContext.Provider
      value={{ swMovies: movies, isLoading: isLoading, error: error }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContext;
