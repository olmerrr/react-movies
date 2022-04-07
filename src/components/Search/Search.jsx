import React from 'react';

import './Search.css';

export class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  };

  searchRef = React.createRef();

  componentDidMount() {
    this.searchRef.current.focus();
  }

  handleFilter = (event) => {
    this.setState(() => ({ type: event.target.dataset.type }), () => {
      this.props.searchMovies(this.state.search, this.state.type);

    });

  };
  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };
  render() {
    return (
      <div className='row'>
        <div className='input-field'>
          <input
            className='validate'
            placeholder='Search'
            type='search'
            value={this.state.search}
            ref={this.searchRef}
            onChange={(event) => this.setState({ search: event.target.value })}
            onKeyDown={this.handleKey}
          />

          <button
            className='btn search-btn'
            onClick={() => this.props.searchMovies(this.search, this.type)}
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
              onChange={this.handleFilter}
              checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>

          <label className='search-actions__label'>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='movie'
              onChange={this.handleFilter}
              checked={this.state.type === 'movie'}
            />
            <span>Movie only</span>
          </label>

          <label className='search-actions__label'>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='series'
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    );
  }
}
