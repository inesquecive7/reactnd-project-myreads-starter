import React, { Component } from 'react';
import Book from './Book';
import Selector from "./Selector.js";

class Shelf extends Component {
    state = {
        titleShelf:this.props.title,
        allBooks: this.props.books,
        currentTitles: this.props.title1,
        pastTitles: this.props.title2,
        futuretitles: this.props.title3
    };

     render() {

        const {titleShelf:title} = this.state;
        
        return (
            <div className='book-shelf'>           
            <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                            <div className="book-shelf-changer">
                          <Selector/>
                            </div>
                          </div>
                          <div className="book-title">{this.props.displayTitle}</div>
                          <div className="book-authors">Harper Lee</div>
                        </div>
                        </li>
                        <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                            <div className="book-shelf-changer">
                          <Selector/>
                            </div>
                          </div>
                          <div className="book-title">{this.props.displayTitle}</div>
                          <div className="book-authors">Harper Lee</div>
                        </div>
                        </li>
                        <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                            <div className="book-shelf-changer">
                          <Selector/>
                            </div>
                          </div>
                          <div className="book-title">{this.props.displayTitle}</div>
                          <div className="book-authors">Harper Lee</div>
                        </div>
                        </li>
                    </ol>
                </div>
             </div>
        );
    }
}

export default Shelf;