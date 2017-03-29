import React, { Component } from 'react'
import style from './style.css'

export default class Book extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('this.props.showFormStatus', this.props.showFormStatus)
    return (
        <div className="book">
          {
            !this.props.showFormStatus
              ? <form className="add-book-form" onSubmit={ this.handleSubmit }>
                  <input className="add-book-input"
                    onChange={ this.setValue.bind( this, 'title' ) }
                    placeholder="Book Genre"></input>

                  <input className="add-book-input"
                    onChange={ this.setValue.bind( this, 'author' ) }
                    placeholder="Book Author"></input>

                  <input className="add-book-input"
                    onChange={ this.setValue.bind( this, 'genre' ) }
                    placeholder="Book Year"></input>

                  <input className="add-book-input"
                    onChange={ this.setValue.bind( this, 'img_url' ) }
                    placeholder="Book Author"></input>

                  <input type="submit" value="Submit" />
                </form>
                : ''
          }
          <div className="topDiv section">
            <div className="genere_title_div">
              <div className="genere_div">
                <div className="genere_text">{this.props.book.genres[0]}</div>
              </div>
              <div className="title_div">
                <div className="title">{this.props.book.title}</div>
              </div>
              <div className="container_edit_div">
                <div className="edit_div">
                  <button className="edit_button" onClick={() => this.props.showForm()} type="button" name="edit">edit</button>
                </div>
                <div className="year_div">
                  <div className="year">{this.props.book.year}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="middleDiv section">
            <div className="author_div">
              <div className="author_name">{this.props.book.author}</div>
            </div>
          </div>
          <div className="bottomDiv section">
            <div className="delete_div">
                <button className="delete_button" type="button" name="delete">delete</button>
            </div>
          </div>
        </div>

    )
  }
}
