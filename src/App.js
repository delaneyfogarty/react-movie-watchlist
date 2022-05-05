import './App.css';
import { useState } from 'react';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import MoviePoster from './MoviePoster';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setAllFilteredMovies] = useState([]);
  const [movieFormTitle, setMovieFormTitle] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormYear, setMovieFormYear] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('');

  function handleSubmitMovie(e) {
    e.preventDefault;
    setAllFilteredMovies([...allMovies]);
  }

  function handleDeleteMovie() {}

  function handleFilteredMovies() {}

  return (
    <div className="App">
      <header className="App-header">
        <MovieForm
          movieFormTitle={movieFormTitle}
          setMovieFormTitle-={setMovieFormTitle}
          movieFormDirector={movieFormDirector}
          setMovieFormDirector={setMovieFormDirector}
          movieFormYear={movieFormYear}
          setMovieFormYear={setMovieFormYear}
        />
        <MovieList />
        <MoviePoster movieFormColor={movieFormColor} setMovieFormColor={setMovieFormColor} />
      </header>
    </div>
  );
}

export default App;
