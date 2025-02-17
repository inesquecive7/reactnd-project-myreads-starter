import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {DebounceInput} from 'react-debounce-input';
import Shelf from './Shelf';

class SearchPage extends Component {
    state = {
        query: '',
        searchBooks: []
    }

    updateQuery = (query) => {
        this.setState({
            query
        })

        if(!query){
            this.setState({searchBooks: []})
            return
        }

    this.props.onSearchBooks(query).then(res => {
        if(res){
            if(res.error){
                this.setState({searchBooks: []})
            }else{
                this.setState(()=> ({
                    searchBooks:res
                }))
            }
        }
    })
}

    render() {

        const {books, onUpdateBookShelf} = this.props
        const searchedBooks = this.state.searchBooks.map(book => {
            const bookInShelf = books.find (b => b.id === book.id)
            return Object.assign({}, bookInShelf, book)
        })
        return (
            <div>
                <div className = "search-books">
                   <div className = "search-books-bar">
                   <Link to="/" className="close-search">Close</Link>   
                        <div className="search-books-input-wrapper">
                            
                             <DebounceInput type="text" 
                             placeholder="Search by title or author"
                             debounceTimeout = {300}
                             onChange = {(event) => this.updateQuery(event.target.value)}
                             /> 
                        </div>         
                    </div>
                </div>
                <div className="search-books-results">
                    <Shelf books = {searchedBooks} 
                    onUpdateBookShelf={onUpdateBookShelf}
                    />
                </div>
            </div>
        );
    }
}

export default SearchPage;