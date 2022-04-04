import React from 'react';
import './App.css';
import { Header } from './layout/Header'
import { Main } from './layout/Main'
import { Footer } from './layout/Footer'
export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <>
          <Header />
          <Main />
          <Footer />
        </>
      </div>
    );
  }
}
