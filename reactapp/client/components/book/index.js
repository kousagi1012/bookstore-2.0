import React, { Component } from 'react'
import EditForm from '../editForm/EditForm.js'
import style from './style.css'

export default class Book extends Component {
  constructor(){
    super()
    this.state = {
      showForm: false
    }
  }
  showFormNow(){
    this.setState({showForm: true})
  }
  hideFormNow(){
    this.setState({showForm: false})
  }
  deleteBook(event){
    event.preventDefault()
    console.log('event function');
    console.log('props',this.props);
    let book = this.props.book
    const options ={
      method:'POST',
      mode:'cors',
      headers: new Headers({
      'Accept':'application/json,application/xml, text/plain,text/html, *.*',
      'Content-Type': 'application/json',
        }),
      credentials: 'same-origin'
    }
    fetch(`http://localhost:3000/api/books/${book.id}/delete`, options)
    .then(result=>{
      this.props.fetchBook()
    })
  }
  
  render() {
    return (
        <div className="book">
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
                  <button onClick={this.showFormNow.bind(this)} className="edit_button" type="button" name="edit">edit</button>
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
                <button onClick={this.deleteBook.bind(this)} className="delete_button" type="button" name="delete">delete</button>
            </div>
          </div>
          {this.state.showForm ? <EditForm hideFormNow={this.hideFormNow.bind(this)} bookData={this.props.book}/> : null }
        </div>
    )
  }
}
