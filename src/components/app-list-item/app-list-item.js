import React, { Component } from 'react'
import './app-list-item.css'

export default class BookItem extends Component {

    render() {
        const {id, title, author, picture, onDeleted,
            isReading, isFinish, toggleBookProp} = this.props;
        return (
            <span className='app-list-item'>
                <div className='item-inner'>
                    <div className='item-picture'>
                        <img src={picture} width='80px' height='100px' alt='a'/>
                    </div>
                    <div className='item-info'>
                        <div className='item-info__title'>
                            <h2>{title}</h2>
                        </div>
                        <div className='item-info__author'>
                            <h4>{author}</h4>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <button type='button'
                            className={isFinish ? 'btn btn-outline-success active' : 'btn btn-outline-success'}
                            onClick={() => toggleBookProp(id, 'isFinish')}>
                        <i className="fas fa-book" />
                    </button>
                    <button type='button'
                            className={isReading ? 'btn btn-outline-info active' : 'btn btn-outline-info'}
                            onClick={() => toggleBookProp(id, 'isReading')}>
                        <i className="fas fa-book-reader" />
                    </button>
                    <button type='button'
                            className='btn btn-outline-danger'
                            onClick={onDeleted}>
                        <i className="fa fa-trash-o" />
                    </button>
                </div>
            </span>
        );
    }

}