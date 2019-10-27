import React from 'react';
import Book from './Book';


function Shelf (props){

        const {books, onUpdateShelf} = props
        
        return (
             <ol className="books-grid">
               {books.map(book => (
                 <li key = {book.id}>
                   <Book book = {book} onUpdateShelf = {onUpdateShelf}/>
                  </li>
               ))}
                    </ol>
        );
    }

export default Shelf;