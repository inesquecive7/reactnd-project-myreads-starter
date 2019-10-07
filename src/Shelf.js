import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component {
    state = {
        titleShelf:this.props.title
    }
    render() {
        const {titleShelf:title} = this.state;
        return (
            <div className='book-shelf'>           
            <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                            <Book/>
                        </li>
                        <li>
                            <Book/>
                        </li>
                        <li>
                            <Book/>
                        </li>
                    </ol>
                </div>
             </div>
        );
    }
}

export default Shelf;