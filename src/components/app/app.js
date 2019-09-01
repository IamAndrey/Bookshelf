import React, {Component} from 'react';
import Header from '../app-header/header'
import SearchPanel from '../app-search-panel/search-panel'
import BookshelfList from '../app-list/app-list'
import BookAdd from '../app-add-book/add-book'
import './app.css'

export default class App extends Component {

    count = 100;
    state = {
        books: [
            {
                id: '1', title: 'Преступление и наказание', author: 'Достоевский Ф. М.',
                picture: 'https://img.labirint.ru/rcimg/c29900560a32c5610eec5eecf8e149d0/960x540/comments_pic/1553/0_6e497d99ba791b8fe4316a64834a374f_1451329775.jpg',
                isReading: true, isFinish: false
            },
            {
                id: '2', title: 'Капитанская дочка', author: 'Пушкин А. С.',
                picture: 'data:image/jpeg;base64,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',
                isReading: false, isFinish: false
            },
            {
                id: '3', title: 'Анна Каренина', author: 'Толстой Л. Н.',
                picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTZGSxi-wup25WmIpsqZdWWv1uM2s6yOTPXoXNe1ddrVTK5JE0g',
                isReading: false, isFinish: false
            },
            {
                id: '4', title: 'Крестьянские дети', author: 'Некрасов Н. А.',
                picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-MdUfyqLBixEsqkmcQIbv33Bq0JDD875Wc72ziEZp-l3B7Cp',
                isReading: false, isFinish: true
            },
        ],
        isReading: false,
        isFinished: false,
        searchBooks: ''
    };

    deleteItem = (id) => {
        this.setState(({books}) => {
            const idx = books.findIndex(el => el.id === id);
            const before = books.slice(0, idx);
            const after = books.slice(idx + 1);
            return {
                searchBooks: '',
                books: [...before, ...after]
            }
        })
    };
    toggleBooks = () => {
        this.setState(() => {
            return {
                isReading: false,
                isFinished: false
            }
        });
    };
    toggleReadingBooks = () => {
        this.setState(() => {
            return {
                isReading: true,
                isFinished: false
            }
        })
    };
    toggleFinishedBooks = () => {
        this.setState(() => {
            return {
                isFinished: true,
                isReading: false
            }
        });
    };
    toggleBookProp = (id, bookProp) => {
        this.setState(({books, searchBooks}) => {
            let newSearchBooks = '';
            if (searchBooks) {
                const ids = searchBooks.findIndex(el => el.id === id);
                const oldSBook = searchBooks[ids];
                const newSBook = {...oldSBook, [bookProp]: !oldSBook[bookProp]};
                newSearchBooks = [...searchBooks.slice(0, ids), newSBook, ...searchBooks.slice(ids + 1)]
            }
            const idx = books.findIndex(el => el.id === id);
            const oldBook = books[idx];
            const newBook = {...oldBook, [bookProp]: !oldBook[bookProp]};
            const before = books.slice(0, idx);
            const after = books.slice(idx + 1);
            return {
                books: [...before, newBook, ...after],
                searchBooks: newSearchBooks
            }
        })
    };
    filter = (array) => {
        const {isReading, isFinished} = this.state;
        if (isReading) {
            return array.filter(el => el.isReading)
        }
        if (isFinished) {
            return array.filter(el => el.isFinish)
        }
        return array

    };
    addBook = (title, author, pictureUrl) => {
        const newBook = {
            id: this.count++,
            title: title,
            author: author,
            picture: pictureUrl
        };
        this.setState(({books}) => {
            return {
                books: [...books, newBook]
            }
        })
    };
    onSearchBooks = (text) => {
        this.setState(({books}) => {
            if (text) {
                return {
                    searchBooks: books.filter(book => {
                        const length = text.length;
                        return book.title.substring(0, length) === text
                    })
                }
            } else {
                return {
                    searchBooks: ''
                }
            }
        })
    };

    render() {

        const {books, isFinished, isReading, searchBooks} = this.state;
        const booksCount = books.length;
        const readingCount = books.filter(book => book.isReading).length;
        const finishCount = books.filter(book => book.isFinish).length;

        return (
            <div className='app'>
                <div className='container'>
                    <Header
                        booksCount={booksCount}
                        readingCount={readingCount}
                        finishCount={finishCount}/>
                    <SearchPanel
                        toggleReadingBooks={this.toggleReadingBooks}
                        toggleFinishedBooks={this.toggleFinishedBooks}
                        toggleBooks={this.toggleBooks}
                        isReading={isReading}
                        isFinished={isFinished}
                        onSearchBooks={this.onSearchBooks}/>
                    <BookshelfList
                        books={searchBooks ? this.filter(searchBooks) : this.filter(books)}
                        onDeleted={this.deleteItem}
                        toggleBookProp={this.toggleBookProp}/>
                    <BookAdd
                        addBook={this.addBook}/>
                </div>
            </div>
        );
    }
};


