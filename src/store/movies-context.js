import React, { useCallback, useEffect, useState } from "react";

const MoviesContext = React.createContext({
  swMovies: [],
  isLoading: false,
  error: "",
  selectedMovie: [],
  playOpeningCrawl: false,

  sortHandler: () => {},
  selectMovieHandler: () => {},
  stopPlayingCrawl: () => {},
});

export const MoviesContextProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [playOpeningCrawl, setPlayOpeningCrawl] = useState(false);

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

  const sortHandler = (e) => {
    // console.log(e.target.value);
    if (e.target.value === "release_date") {
      const sortedSwMovies = movies.sort((a, b) => {
        const aa = a.releaseDate.split("-").join();
        const bb = b.releaseDate.split("-").join();

        return aa < bb ? -1 : aa > bb ? 1 : 0;
      });

      // setMovies(sortedSwMovies);
      setMovies((prevState) => {
        return [...prevState];
      });
      setSelectedMovie([]);
      // console.log(movies);
    }
    if (e.target.value === "chronologically") {
      const sortedSwMovies = movies.sort((a, b) => a.id - b.id);

      // setMovies(sortedSwMovies);
      setMovies((prevState) => {
        return [...prevState];
      });
      setSelectedMovie([]);
      // console.log(movies);
    }
  };

  const stopPlayingCrawl = () => {
    setPlayOpeningCrawl(false);
  };

  const selectMovieHandler = (e) => {
    // console.log(e.target.value);
    const id = e.target.value;
    const selectedMovie = movies.find((movie) => movie.id === id);
    // console.log(id);
    console.log(selectedMovie);

    setSelectedMovie(selectedMovie);
    setPlayOpeningCrawl(true);
  };

  return (
    <MoviesContext.Provider
      value={{
        swMovies: movies,
        isLoading: isLoading,
        error: error,
        selectedMovie: selectedMovie,
        playOpeningCrawl: playOpeningCrawl,
        stopPlayingCrawl: stopPlayingCrawl,
        sortHandler,
        selectMovieHandler,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContext;
