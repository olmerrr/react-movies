import { Component } from "react";
import "./Main.css";
import { Loader } from "./Loader";

import { Movies } from "../components/Movies";
export class Main extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=b2fd5f01&s=max")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }
  render() {
    const { movies } = this.state;
    return (
      <main className="container content">
        <div>
          {movies.length ? (
            <Movies movies={movies} />
          ) : (
            <Loader/>
          )}
        </div>
      </main>
    );
  }
}
