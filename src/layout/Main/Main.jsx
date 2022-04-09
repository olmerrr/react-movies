import { Component } from 'react';
import { Loader } from '../Loader/Loader';
import { Search } from '../../components/Search/Search';
import { Movies } from '../../components/Movies/Movies';

import './Main.css';

const API_KEY = process.env.REACT_APP_API_KEY;
export class Main extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      movies: [],
    };
  }

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=max`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, isLoading: false }))
      // .catch((err) => {
      //   console.error(err);
      //   this.setState({isLoading: false})
      // });
    }

  searchMovies = (str, type = 'all') => {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, isLoading: false }))
      .catch((err) => {
        console.error(err);
        this.setState({isLoading: false})
      });
  };

  render() {
    const { isLoading, movies } = this.state;
    return (
      <main className='container content'>
        <Search searchMovies={this.searchMovies} />

        <div>{isLoading ? <Loader /> : <Movies movies={movies} />}</div>
      </main>
    );
  }
}
