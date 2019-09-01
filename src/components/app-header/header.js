import React from 'react'
import './header.css'

const Header = ({booksCount = 0, readingCount = 0, finishCount = 0}) => {
    return (
        <div className='header'>
            <h1>Книжная полка</h1>
            <h2>
                количество книг - <span className='quantity'>{booksCount}</span>,
                сейчас читаю - <span className='reading'>{readingCount}</span>,
                прочитал - <span className='finish'>{finishCount}</span>
            </h2>
        </div>
    );
};

export default Header