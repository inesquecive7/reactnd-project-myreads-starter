import React from 'react';
import Selector from './Selector';
import defaultThumbnail from './icons/defaultThumbnail.png'

function Book(props){

  const {book, onUpdateBookShelf} = props
  const bookStyle = {
    width:128,
    height: 193
  }

  if (book.imageLinks && book.imageLinks.thumbnail) {
    bookStyle.backgroundImage = `url(${book.imageLinks.thumbnail})`
  }else{
    bookStyle.backgroundImage = `url(${defaultThumbnail})`
  }
        return (
            <div>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={bookStyle}></div>
                            <div className="book-shelf-changer">
                          <Selector
                          shelf = {book.shelf}
                          onUpdateBookShelf = {shelf => onUpdateBookShelf (book.shelf)}
                          />
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
            </div>
         );
    }   


export default Book;