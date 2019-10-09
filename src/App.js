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

    const allBooks = this.state.books; // here, if I am failing to access the shelf inside each book

    console.log(allBooks);
    
    const currentReads = allBooks.filter(book => allBooks[0].title === "React");

    console.log(currentReads);

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
