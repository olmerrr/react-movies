import { useState, useRef, useEffect } from 'react';

import './Search.css';

export function Search({ searchMovies = Function.prototype }) {
  // searchMovies = Function.prototype защита от того что мы не получим ф-ю

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const searchRef = useRef(null);

  // searchRef = React.createRef();

  useEffect(() => {
    searchRef.current.focus();
  });
  // componentDidMount() {
  //   this.searchRef.current.focus();
  // }

  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);
  };

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      searchMovies(search, type);
    }
  };

  return (
    <div className='row'>
      <div className='input-field'>
        <input
          className='validate'
          placeholder='Search'
          type='search'
          value={search}
          ref={searchRef}
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={handleKey}
        />

        <button
          className='btn search-btn'
          onClick={() => searchMovies(search, type)}
        >
          Search
        </button>
      </div>
      <div className='search-actions'>
        <label className='search-actions__label'>
          <input
            className='with-gap'
            name='type'
            type='radio'
            data-type='all'
            onChange={handleFilter}
            checked={type === 'all'}
          />
          <span>All</span>
        </label>

        <label className='search-actions__label'>
          <input
            className='with-gap'
            name='type'
            type='radio'
            data-type='movie'
            onChange={handleFilter}
            checked={type === 'movie'}
          />
          <span>Movie only</span>
        </label>

        <label className='search-actions__label'>
          <input
            className='with-gap'
            name='type'
            type='radio'
            data-type='series'
            onChange={handleFilter}
            checked={type === 'series'}
          />
          <span>Series only</span>
        </label>
      </div>
    </div>
  );
}
