import { useState, useEffect } from 'react';
import { Loader } from '../Loader/Loader';
import { Search } from '../../components/Search/Search';
import { Movies } from '../../components/Movies/Movies';

import './Main.css';

const API_KEY = process.env.REACT_APP_API_KEY;

export const Main = () => {

  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=max`)
      .then((response) => response.json())
      .then((data) => (
        setMovies(data.Search),
        setLoading(false)
      ))
  }, [])

  const searchMovies = (str, type = 'all') => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((response) => response.json())
      .then((data) =>(setMovies(data.Search), setLoading(false)))
      .catch((err) => {
        console.error(err);
        (setLoading(false))
      });
  };

    return (
      <main className='container content'>
        <Search searchMovies={searchMovies} />

        <div>{isLoading ? <Loader /> : <Movies movies={movies} />}</div>
      </main>
    );
  }
