import React, { Component } from 'react'
import './addBook.css'

export default class AddBook extends Component {
  constructor( props ) {
    super( props )
      this.state = {
        book: {
          genres: '',
          title: '',
          year: '',
          author: ''
        }
      }

      this.handleSubmit = this.handleSubmit.bind( this )
    }

    handleSubmit( event ) {
      event.preventDefault()
      let book = this.state.book

      let options = {
        method: 'POST',
        mode: 'cors',
        headers: new Headers({
          'Accept': 'application/json, application/xml, text/html, text/plain, */*',
          'Content-Type': 'application/json'
        }),
        credentials: 'same-origin',
        body: JSON.stringify( book )
      }

      fetch( 'http://localhost:3000/api/books', options )
        .then( response => response.json() )
        .then( json => {
          let redirectURL = `/api/books`
          this.setState(book: {
            genres: '',
            title: '',
            year: '',
            author: ''
          })
          // this.context.router.push( redirectURL )
        })

    }
    setValue( field, event ) {
      let book = this.state.book
      book[field] = event.target.value
      this.setState({ book })
    }

    render() {
      return (
        <form className="add-book-form" onSubmit={ this.handleSubmit }>
          <input className="add-book-input" name='genres'
            onChange={ this.setValue.bind( this, 'genres' ) }
            placeholder="Book Genre"></input>

          <input className="add-book-input" name='title'
            onChange={ this.setValue.bind( this, 'title' ) }
            placeholder="Book Title"></input>

          <input className="add-book-input" name='year'
            onChange={ this.setValue.bind( this, 'year' ) }
            placeholder="Book Year"></input>

          <input className="add-book-input" name='author'
            onChange={ this.setValue.bind( this, 'author' ) }
            placeholder="Book Author"></input>

          <input type="submit" value="Submit" />
        </form>
      )
    }
  }

  // AddBook.contextTypes = {
  //   router: React.PropTypes.object.isRequired
  // }
