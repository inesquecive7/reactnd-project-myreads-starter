import React from 'react';
import Shelf from './Shelf';

function Selector (props) {

    const {book, onUpdateBookShelf} = props

        return (
            <div className = "book-shelf-changer">
                     <select
                     value = {Shelf || "none"}
                     onChange = {event => onUpdateBookShelf(event.target.value)}
                     >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                     </select>
            </div>
        );
    }


export default Selector;