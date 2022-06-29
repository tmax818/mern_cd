import React from 'react'

const PersonCard = ({firstName, lastName, age, hairColor}) => {

  return (
    <div>
        <h1>{lastName}, {firstName}</h1>
        <p>age: {age}</p>
        <p>hair Color: {hairColor}</p>
    </div>
  )
}

export default PersonCard