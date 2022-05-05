import './App.css';
import { useState } from 'react';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import MoviePoster from './MoviePoster';

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
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [year, setYear] = useState('');
  const [posterColor, setPosterColor] = useState('');

  function handleDeleteMovie(title) {
    const indexToRemove = allMovies.findIndex((movie) => movie.title === title);
    allMovies.splice(indexToRemove, 1);
    setAllMovies([...allMovies]);
  }

  function handleFilteredMovies(search) {
    if (search) {
      const matchingMovies = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
      search ? setAllFilteredMovies(matchingMovies) : setAllFilteredMovies(search);
    }
  }
  console.log(filteredMovies.length, 'filteredMovies.length');
  console.log(filteredMovies, 'filteredMovies');
  console.log(allMovies, 'allMovies');
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
        />
        {title || year ? (
          <MoviePoster title={title} year={year} director={director} posterColor={posterColor} />
        ) : (
          <div>Type to show a preview</div>
        )}
        <div className="bottom">
          <div>
            Filter Movies By Title
            <input onChange={(e) => handleFilteredMovies(e.target.value)} />
          </div>
          <MovieList allMovies={allMovies} handleDeleteMovie={handleDeleteMovie} />
        </div>
      </header>
    </div>
  );
}

export default App;
