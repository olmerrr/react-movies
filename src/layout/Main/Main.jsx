import { Component } from "react";
import { Loader } from "../Loader/Loader";
import { Search } from "../../components/Search/Search";
import { Movies } from "../../components/Movies/Movies";

import "./Main.css";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=b2fd5f01&s=max')
      .then(response => response.json())
      .then((data => this.setState({ movies: data.Search })))
  }

  searchMovies = (str, type = 'all') => {
    fetch(`http://www.omdbapi.com/?apikey=b2fd5f01&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  render() {
    const { movies } = this.state;
    return (
      <main className="container content">
          <Search searchMovies={this.searchMovies}/>

      
        <div>
          {movies.length ? (
            <Movies movies={movies}/>
          ) : (
            <Loader/>
          )}
        </div>
      
      </main>
    );
  }
}
