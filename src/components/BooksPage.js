import React, { useState } from 'react'
import AddBook from './AddBook'
import Axios from "axios"

const UserBookList = ({setBooks, books, user_id}) => {
  const [isHidden, setHide] = useState(true)


  return (
    <ul className="userBookList">
      {isHidden ? 
        <button onClick={() => {isHidden ? setHide(false) : setHide(true)}}> Add New Book </button> :
        <AddBook setHide={setHide} isHidden={isHidden}/>
      } 
  </ul>
  )
}

export default UserBookList;