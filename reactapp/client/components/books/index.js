import React, { Component } from 'react'
import Book from '../book/index'
import AddBook from '../addBook/addBook'

export default class Books extends Component{
  constructor(){
    super()
    this.state = {books: [], showFormStatus: false}
 }

  componentDidMount(){
    this.fetchBook()
  }

  showForm() {
    this.setState({showFormStatus: true})
  }

  fetchBook(){
    const options = {
      method:'GET',
      mode:'cors',
      headers: new Headers({
      'Accept':'application/json,application/xml, text/plain,text/html, *.*',
      'Content-Type': 'application/json',
        }),
      credentials: 'same-origin'
      }
    fetch('http://localhost:3000/api/books', options)
      .then( data => {
        return data.json()
      })
      .then( books => {
        this.setState({
            books: books
      })
    })
    .catch( err => {
      console.log('Error loading tasks', err);
      return err
      })
    }

  removeBook(){
    let book = this.state.book
    fetch(`http://localhost:3000/api/books/:id/delete${book.book_id}`, {
      method: 'delete',
    })
  }



  render(){

    const books = this.state.books
    const booksJSX = books.map(book => <Book key={book.id} book={book} />)
    return this.state.books.length == 0 ?
     <div> Loading data </div>
    : <div className="mainContainer">{booksJSX}
      < AddBook/>
    </div>
  }
}
