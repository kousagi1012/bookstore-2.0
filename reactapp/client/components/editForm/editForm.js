import React, { Component } from 'react'
import './style.css'

export default class EditForm extends Component{
  constructor(props){
    super(props)
    this.state ={
        title: this.props.bookData.title,
        year: this.props.bookData.year,
        id: this.props.bookData.id
      }
    this.handleInputChange = this.handleInputChange.bind( this )

  }


  handleInputChange(event){
    const target = event.target
    const value = target.value
    const name = target.name
  this.setState({
    [name]:value
  })
}
// editBook(){
//   let book = this.state
//
//   const options ={
//     method:'POST',
//     mode:'cors',
//     headers: new Headers({
//     'Accept':'application/json,application/xml, text/plain,text/html, *.*',
//     'Content-Type': 'application/json',
//       }),
//     credentials: 'same-origin'
//     }
//   fetch('http://localhost:3000/api/books/:id', options)
// }

sendEditBook(event){
  event.preventDefault()
  console.log('event function');
  console.log(this);
  let book = this.state
  const options ={
    method:'POST',
    body: JSON.stringify({book:this.state}),
    mode:'cors',
    headers: new Headers({
    'Accept':'application/json,application/xml, text/plain,text/html, *.*',
    'Content-Type': 'application/json',
      }),
    credentials: 'same-origin'
    }
  fetch(`http://localhost:3000/api/books/${book.id}`, options)
  .then(result=>{
    this.props.hideFormNow()
  })

}


  render() {

    let book = this.state
    return(
        <div className='form'>

          <form onSubmit={this.sendEditBook.bind(this)}>
            <h3 className="formHead">Edit Book</h3>
            <div className="centering">
              <br /><label> Title</label><br />
              <input type="text" name="title" placeholder={book.title} onChange={this.handleInputChange} value={this.state.title}/>
              <br /><label>Year</label><br />
              <input type="text" name="year" placeholder={book.year} onChange={this.handleInputChange}value={this.state.year}/>
              <br /><input  type="submit" value="Submit"/>
            </div>
          </form>
        </div>

    )
  }
}
