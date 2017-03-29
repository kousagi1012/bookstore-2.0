import React, { Component } from 'react'
import './addBook.css'

export default class AddBook extends Component {
  constructor( props ) {
    super( props ) {
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

      let request = new Request( this.props.fetchURL, {
        method: 'POST',
        headers: new Headers({
          'Accept': 'application/json, application/xml, text/html, text/plain, */*',
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify( book )
      })

      fetch( request )
        .then( response => response.json() )
        .then( json => {
          let redirectURL = `/book-details/${json.data.id}`
          this.context.router.push( redirectURL )
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
          <input className="add-book-input"
            // onChange={ this.setValue.bind( this, 'title' ) }
            placeholder="Book Genre"></input>

          <input className="add-book-input"
            // onChange={ this.setValue.bind( this, 'author' ) }
            placeholder="Book Author"></input>

          <input className="add-book-input"
            // onChange={ this.setValue.bind( this, 'genre' ) }
            placeholder="Book Year"></input>

          <input className="add-book-input"
            // onChange={ this.setValue.bind( this, 'img_url' ) }
            placeholder="Book Author"></input>

          <input type="submit" value="Submit" />
        </form>
      )
    }
  }

  addBook.contextTypes = {
    router: React.PropTypes.object.isRequired
  }
