import React from 'react';
import Shelf from './Shelf.js';
import {Link} from "react-router-dom";

function FrontPage(props) {

    const { books, onUpdateBookShelf } = props;

    const currentlyReadingBooks = books.filter(
    book => book.shelf === 'currentlyReading'
    );
    const futureReadBooks= books.filter(book => book.shelf === 'wantToRead');
    const pastReadBooks = books.filter(book => book.shelf === 'read');
 
    return (
                        
         <div className="list-books">
             <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
                
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className = "bookshelf-title"> Currently Reading</h2>
                        <div className = "bookshelf-books">
                        <Shelf
                        books ={currentlyReadingBooks}
                        onUpdateBookShelf = {onUpdateBookShelf}
                        />
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className = "bookshelf-title">Want to Read</h2>
                        <div className = "bookshelf-books">
                        <Shelf 
                        books = {futureReadBooks}
                        onUpdateBookShelf = {onUpdateBookShelf}
                        />
                    </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className = "bookshelf-title">Read</h2>
                         <div className = "bookshelf-books">
                        <Shelf 
                        books={pastReadBooks}
                        onUpdateBookShelf={onUpdateBookShelf}
                        />
                    </div>
                 </div>
                </div>
                </div>
                <div className="open-search">
                <Link to="/search">Add a book</Link> 
            </div>
        </div>
        );
    }

export default FrontPage;