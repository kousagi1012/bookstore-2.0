import React, { Component } from 'react'
import Book from '../book/index'

export default class Books extends Component{
  constructor(){
    super()
    this.state = {books: []}
 }

 // map( book => {
 //   return (
 //     <div>
 //       <h2>{book.title}</h2>
 //     </div>
 //   )
 // } )

  componentDidMount(){
    this.fetchBook()
   }

  fetchBook(){
    const options ={
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



  render(){
    const books = this.state.books
    const booksJSX = books.map(book => <Book book={book} />)
    return this.state.books.length == 0 ?
     <div> Loading data </div>
    : <div className="mainContainer">{booksJSX}</div>
  }
}
