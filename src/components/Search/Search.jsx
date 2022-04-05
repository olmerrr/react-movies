import React from "react";

import './Search.css'

export class Search extends React.Component {
  
  state = {
    search: "",
  };

  searchRef = React.createRef();

    componentDidMount() {
    this.searchRef.current.focus();
  }

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search);
    }
  };
  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            className="validate"
            placeholder="Search"
            type="search"
            value={this.state.search}
            ref={this.searchRef}
            onChange={(event) => this.setState({ search: event.target.value })}
            onKeyDown={this.handleKey}
          />

          <button
            className="btn search-btn"
            onClick={() => this.props.searchMovies(this.state.search)}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}
