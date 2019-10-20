import React, { Component } from 'react';
import Shelf from './Shelf.js';
import {Link} from "react-router-dom";

class FrontPage extends Component {

    
    render() {

        const {presentReads, reads, willReads} = this.props

        const pastTitles = presentReads.map(presentRead =>{
            return {
                title:presentReads.title,
                author: presentReads.authors[0],
                thumbnail: presentReads.imageLinks.thumbnail
            }
        });
        
        const readTitles = reads.map(read =>{
            return{ 
                title:reads.title,
                author:reads.authors[0],
                thumbnail: reads.imageLinks.thumbnail
            }

        });

        const futureTitles = willReads.map(willRead =>{
            return{
                title:willReads.title,
                author:willReads.authors[0],
                thumbnail: willReads.imageLinks.thumbnail
            }
        }
            );

        return (
                        
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                        <small>`${pastTtitles.title}`</small>
                        <Shelf title = "Currently Reading" content = {pastTitles}/>

                        <Shelf title = "Want to read" />

                        <Shelf title = "Read"/>

                        </div>
                    </div>
                 </div>
                <Link to="/search" className="open-search">Add a book</Link> 
            </div>
        );
    }
}

export default FrontPage;