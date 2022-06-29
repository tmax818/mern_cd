import React, { Component } from 'react'

export class PersonCard extends Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
        ...props
    };
}

  render() {
    console.log(this.state)
    const {firstName, lastName, age, hairColor} = this.state
    return (
      <div>
        <h1>{lastName} {firstName}</h1>
        <p>age: {age}</p>
        <p>hair color: {hairColor}</p>
        <button onClick={()=> this.setState({age: this.state.age += 1})}>Grow old!!!</button>
      </div>
    )
  }
}

export default PersonCard