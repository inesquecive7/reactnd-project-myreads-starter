import React, { Component } from 'react';
import Shelf from './Shelf.js';
import {Link} from "react-router-dom";

class FrontPage extends Component {

    state = {
        frontBooks:this.props.myBooks
    }

    
    render() {
        return (
            
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">

                        <Shelf title = "Currently Reading" books = {this.state.frontBoks}/>

                        <Shelf title = "Want to read" books = {this.state.frontBooks}/>

                        <Shelf title = "Read" books = {this.state.frontBooks}/>

                        </div>
                    </div>
                 </div>
                <Link to="/search" className="open-search">Add a book</Link> 
            </div>
        );
    }
}

export default FrontPage;