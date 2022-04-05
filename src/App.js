import React from 'react';
import './App.css';
import { Header } from './layout/Header/Header'
import { Main } from './layout/Main/Main'
import { Footer } from './layout/Footer/Footer'
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
