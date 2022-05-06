import { useState } from 'react';

export function useMovieForm() {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [year, setYear] = useState('');
  const [posterColor, setPosterColor] = useState('');

  return {
    title,
    setTitle,
    director,
    setDirector,
    year,
    setYear,
    posterColor,
    setPosterColor,
  };
}
