import React, {useState} from 'react'

const HookForm = () => {
    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
  return (
    <div>
    <form onSubmit={(e) => {e.preventDefault(); console.log(firstname)}}>
            <div>
                <label>first name: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label>last name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>email: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>password: </label> 
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
    </form>
        <h1>Your form data</h1>
        <p>First Name: {firstname}</p>
        <p>last Name: {lastname}</p>
        <p>email: {email}</p>
        <p>password: {password}</p>
    </div>
  )
}

export default HookForm