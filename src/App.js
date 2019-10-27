import React from 'react';
import * as BooksAPI from './BooksAPI';
import FrontPage from './FrontPage.js';
import SearchPage from './SearchPage.js';
import {Route} from 'react-router-dom';
import './App.css';



class BooksApp extends React.Component {
  state = {
    books : []
  }
  
  componentDidMount(){
    BooksAPI.getAll().then((books)=> {
    this.setState(
      () => ({books}
        ))
    })
  }

  updateBookShelf = (book,shelf) => {
    BooksAPI.update(book,shelf).then(()=>{
      this.setState(currentState => {
        const location = currentState.books.findIndex(c => c.id === book.id);
        if (location !== -1){
          return{
            books: [
              ...currentState.books.slice(0,location),
              Object.assign({},currentState.books[location], {shelf}),
              ...currentState.books.slice(location + 1)
            ]
          };
        }

        const books = currentState.books.slice();
        books.push(Object.assign({}, book, { shelf }));
        return {books};
      });
    });
  };

  searchBooks = query => {
    return BooksAPI.search(query).then(books => books);
  };
 
  render() {
        
    return (
    <div className = 'app'>
      <Route
      exact
      path="/"
      render={() => (
        <FrontPage
        items = {this.state.books}
        onUpdateBookShelf = {(book,shelf) => {
          this.updateBookShelf(book,shelf)
        }}

        />
      )}
      />

     <Route
     path="/search"
     render = {(history) => (
      <SearchPage 
      items = {this.state.books}
      onSearchBooks = {this.searchBooks}
      onUpdateBookShelf = {this.updateBookShelf}/>
     )}
     />
         </div>  
        )}
}

export default BooksApp
