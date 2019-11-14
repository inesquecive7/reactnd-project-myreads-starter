import React from 'react';
import Book from './Book';


function Shelf (props){

        const {books, onUpdateBookShelf} = props
        
        return (
             <ol className="books-grid">
               {books.map(book => (
                 <li key = {book.id}>
                   <Book book = {book} onUpdateBookShelf = {onUpdateBookShelf}/>
                  </li>
               ))}
               </ol>
        );
    }

export default Shelf;