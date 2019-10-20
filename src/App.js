import React from 'react';
import * as BooksAPI from './BooksAPI';
import FrontPage from './FrontPage.js';
import SearchPage from './SearchPage.js';
import {Route} from 'react-router-dom';
import './App.css';
import { domainToASCII } from 'url';


class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books : []
  }
  
  componentDidMount(){
    BooksAPI.getAll().then((books)=> {
    this.setState(
      () => ({books}
        ))
    })
  }
 
  render() {
    
    const {books} = this.state;   
    const currentReads = books.filter(book => book.shelf === 'currentlyReading');
    const futureReads = books.filter(book => book.shelf === 'wantToRead');
    const pastReads = books.filter(book => book.shelf === 'read');
    console.log(pastReads);
    
    return (
    <div className = 'app'>
      <Route
      exact
      path="/"
      render={() => (
        <FrontPage
        presentReads = {currentReads}
        reads ={pastReads}
        willReads = {futureReads}
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
