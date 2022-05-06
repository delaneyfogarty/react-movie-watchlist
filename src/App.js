import './App.css';
import { useState } from 'react';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import MoviePoster from './MoviePoster';
import { useEffect } from 'react';
import { useMovieForm } from './useMovieForm';

function App() {
  const [allMovies, setAllMovies] = useState([
    {
      title: 'Everything Everywhere All At Once',
      year: '2022',
      director: 'Daniel Kwan',
      posterColor: 'red',
    },
    {
      title: 'Get Out',
      year: '2017',
      director: 'Jordan Peele',
      posterColor: 'rebeccapurple',
    },
    {
      title: 'Lemonade Film',
      year: '2016',
      director: 'Beyonce',
      posterColor: 'gold',
    },
  ]);
  const [filteredMovies, setAllFilteredMovies] = useState(allMovies);
  const [filterQuery, setFilterQuery] = useState('');

  const { title, setTitle, director, setDirector, year, setYear, posterColor, setPosterColor } =
    useMovieForm();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => handleFilteredMovies(filterQuery), [filterQuery]);

  function addMovie(newMovie) {
    const updatedMovies = [...allMovies, newMovie];
    setAllMovies(updatedMovies);
  }

  function handleDeleteMovie(title) {
    const indexToRemove = allMovies.findIndex((movie) => movie.title === title);
    allMovies.splice(indexToRemove, 1);
    setAllMovies([...allMovies]);
  }

  function handleFilteredMovies(movieSearch) {
    const matchingMovies = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(movieSearch.toLowerCase())
    );
    movieSearch ? setAllFilteredMovies(matchingMovies) : setAllMovies(allMovies);
  }

  function handleSubmitMovie(e) {
    e.preventDefault();
    const newMovie = {
      title: title,
      director: director,
      year: year,
      posterColor: posterColor,
    };

    setAllMovies([...allMovies, newMovie]);

    setTitle('');
    setDirector('');
    setYear('');
    setPosterColor('red');
  }

  return (
    <div className="App">
      <header className="App-header">
        <MovieForm
          title={title}
          setTitle={setTitle}
          director={director}
          setDirector={setDirector}
          year={year}
          setYear={setYear}
          posterColor={posterColor}
          setPosterColor={setPosterColor}
          allMovies={allMovies}
          setAllMovies={setAllMovies}
          handleSubmitMovie={handleSubmitMovie}
          addMovie={addMovie}
        />
        {title || year ? (
          <MoviePoster title={title} year={year} director={director} posterColor={posterColor} />
        ) : (
          <div>Type to show a preview</div>
        )}
        <div className="bottom">
          <div>
            Filter Movies By Title
            <input onChange={(e) => setFilterQuery(e.target.value)} />
          </div>
          <MovieList
            allMovies={filterQuery ? filteredMovies : allMovies}
            handleDeleteMovie={handleDeleteMovie}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
