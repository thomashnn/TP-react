import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './Home.css';
import useFetchMovies from './useFetchMovies.js';
import Movie from '../../components/Movie/Movie.jsx';

function Home() {
  const [movieName, setMovieName] = useState('');

  const movies = useFetchMovies();
  console.log('Hello there', typeof movies, movies);

  const listMovies = movies.map((movieItem) => (
    <li key={movieItem.id}>
      <Movie movieData={movieItem} />
    </li>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Liste des films !
        </a>
      </header>

      <form action="" method="">
        <p>
          <label for="liste_films">
            Entrer le nom d'un film <br />
            <input
              type="text"
              name="input_film"
              id="liste_films"
              placeholder="Exemple : Jurassic Park"
              value={movieName}
              onChange={(event) => setMovieName(event.target.value)}
            />
          </label>
        </p>
        <p>{movieName} </p>
        <h3>Les films les plus populaires</h3>
        <ul> {listMovies} </ul>
      </form>
    </div>
  );
}

export default Home;
