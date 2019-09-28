import React from 'react';
import * as BooksAPI from './BooksAPI';
import FrontPage from './FrontPage.js';
import SearchPage from './SearchPage.js';
import {Route} from 'react-router-dom';
import './App.css';
import { domainToASCII } from 'url';


class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
    <div className = 'app'>
      <Route
      exact
      path="/"
      render={() => (
        <FrontPage
        myBooks = {this.state.books}
        />
      )}
      />
     <Route
     path="/search"
     render = {() => (
      <SearchPage books = {this.state.books}/>
     )}
     />
         </div>  
        )}
}

export default BooksApp
