import React from 'react'
import './app-list.css'
import BookItem from '../app-list-item/app-list-item'

const BookshelfList = ({books, onDeleted, toggleBookProp}) => {
    const elements = books.map(book => {
        const {id} = book;
        return (
            <li key={id} className='list-group-item'>
                <BookItem {...book}
                onDeleted={() => onDeleted(id)}
                toggleBookProp={toggleBookProp}/>
            </li>
        );
    });
    return (
        <ul className='list-group todo-list mt-3'>
            { elements }
        </ul>
    );
};

export default BookshelfList