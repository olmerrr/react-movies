import {Movie} from './Movie'

import './Movies.css';

export function Movies(props) {
  const {movies} = props;

  return <div className='movies'>
    {
      movies.map(movie => (
        <Movie
          key={movie.imdbID}
          {...movie}
        />
        ))
    }
  </div>
}