import React, {Component} from 'react'
import './search-panel.css'

export default class SearchPanel extends Component {

    labelChange = (event) => {
        this.props.onSearchBooks(event.target.value)
    };

    render() {

        const {toggleReadingBooks, toggleFinishedBooks, toggleBooks, isReading, isFinished} = this.props;

        return (
            <div className='search-panel d-flex'>
                <div className='search-panel-content'>
                    <input className='input'
                           placeholder='Введите название книги или автора'
                           onChange={this.labelChange}/>
                </div>
                <div className='search-panel-btn d-flex'>
                    <button
                        className={!isReading && !isFinished ? 'btn btn-outline-primary active' : 'btn btn-outline-primary'}
                        onClick={toggleBooks}>Книги
                    </button>
                    <button className={isReading ? 'btn btn-outline-info active' : 'btn btn-outline-info'}
                            onClick={toggleReadingBooks}>Читаю
                    </button>
                    <button className={isFinished ? 'btn btn-outline-success active' : 'btn btn-outline-success'}
                            onClick={toggleFinishedBooks}>Прочитал
                    </button>
                </div>
            </div>
        );
    }
}
