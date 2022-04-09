import {Movie} from './Movie'

import './Movies.css';

export function Movies(props) {
  // сделал заглушку если пользователь введет некоректные данные
  const {movies = []} = props;
  // сделал заглушку если пользователь введет некоректные данные

  return <div className='movies'>
    {
      movies.length ?   movies.map(movie => (
        <Movie
          key={movie.imdbID}
          {...movie}
        />
        )) : <h4>Nothing found..</h4> 
    }
  </div>
}