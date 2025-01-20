import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetchMovies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    requeteAPI();
  }, []);

  function requeteAPI() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&total_results=10`,
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjlmNjAwMzY4MzMzODNkNGIwYjNhNzJiODA3MzdjNCIsInN1YiI6IjY0NzA5YmE4YzVhZGE1MDBkZWU2ZTMxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Em7Y9fSW94J91rbuKFjDWxmpWaQzTitxRKNdQ5Lh2Eo',
          },
          params: { page: 1, limit: 10 },
        }
      )

      .then((response) => {
        // Do something if call succeeded
        const listMovies = [];
        for (let i = 0; i < 10; i++) {
          const IMBDMovie = response.data.results[i];
          console.log(IMBDMovie);
          listMovies.push(IMBDMovie);
        }
        setMovies(listMovies);
      })

      .catch((error) => {
        // Do something if call failed
        console.log(error);
      });
  }

  return movies;
}

export default useFetchMovies;
