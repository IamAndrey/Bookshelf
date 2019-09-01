import React, {Component} from 'react'
import './add-book.css'

export default class BookAdd extends Component {

    state = {
        title: '',
        author: '',
        pictureUrl: ''
    };

    onTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    };
    onAuthorChange = (event) => {
        this.setState({
            author: event.target.value
        })
    };
    onPictureUrl = (event) => {
        this.setState({
            pictureUrl: event.target.value
        });
    };
    onSubmit = () => {
        this.props.addBook(this.state.title, this.state.author, this.state.pictureUrl);
    };

    render() {
        const {title, author} = this.state;
        return (
            <div className='book-add-container mt-4'>
                <h3>Новая книга</h3>
                <form className='book-add-form row needs-validation'
                      noValidate>
                    <div className='form-group col-md-8'>
                        <input type='text'
                               className='form-control mt-2 mb-2'
                               placeholder='Введите название книги'
                               onChange={this.onTitleChange}/>
                        <input type='text'
                               className='form-control mt-2 mb-2'
                               placeholder='Введите фамилию и инициалы автора'
                               onChange={this.onAuthorChange}/>
                        <input type='text'
                               className='form-control mt-2 mb-2'
                               placeholder='Введите URL обложки книги'
                               onChange={this.onPictureUrl}/>
                    </div>
                    <div className='book-add-btn col-md-4'>
                        <button type='button'
                                className='btn btn-outline-success'
                                onClick={this.onSubmit}
                                disabled={!title || !author}>
                            Добавить книгу
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}