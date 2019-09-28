import React, { Component } from 'react';
import Shelf from './Shelf.js';
import {Link} from "react-router-dom";

class FrontPage extends Component {
    render() {
        return (
            <div>
                <Shelf/>
                <Shelf/>
                <Shelf/>
             <Link to="/search" className="open-search">
              Add a book
            </Link> 
            </div>
        );
    }
}

export default FrontPage;