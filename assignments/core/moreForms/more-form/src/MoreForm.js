import React, {useState} from 'react'

const MoreForm = (props) => {
    const [state, setState] = useState({})
    const [validate, setValidate] = useState(false)
    const [focus, setFocus] = useState()
    
    const handleForm = (e, length)=>{
        e.preventDefault()
        console.log(e.target.value)
        if((e.target.value.length < length)){
            setValidate(true)    
        } else {
            setValidate(false)
        }
        setState({...state, [e.target.id]: e.target.value})
    }

    console.log(state, validate, focus)
    return (
    <div>
        <form>
        <div onFocus={e => setFocus(e.target.id)} id="last">
            <label>first name: </label> 
            <input type="text" onChange={ e => handleForm(e, 3)  } id="first" />
            <p>{((focus==="first") && validate) && `${focus} name must be at least two characters`}</p>
        </div>
        <div onFocus={e => setFocus(e.target.id)} id="last">
            <label>last name: </label> 
            <input type="text" onChange={ e => handleForm(e, 3)  } id="last"/>
            <p>{(focus==="last" && validate) && `${focus} name must be at least two characters`}</p>
        </div>
        <div onFocus={e => setFocus(e.target.id)} id="email">
            <label>email: </label> 
            <input type="text" onChange={ e => handleForm(e, 3)  } id="email"/>
            <p>{(focus==="email" && validate) && `${focus} must be at least two characters`}</p>
        </div>
        <div onFocus={e => setFocus(e.target.id)} id="password">
            <label>password: </label> 
            <input type="text" onChange={ e => handleForm(e, 8)  } id="password"/>
            <p>{(focus==="password" && validate) && `${focus} must be at least two characters`}</p>
        </div>
        <div onFocus={e => setFocus(e.target.id)} id="password-confirm">
            <label>password: </label> 
            <input type="text" onChange={ e => handleForm(e, 8)  } id="passwordConfirm"/>
            <p>{(focus==="passwordConfirm" && validate) && `${focus} must be at least two characters`}</p>
            <p>{(focus==="passwordConfirm" && state.password !== state.passwordConfirm) && `${focus} must match`}</p>
        </div>
        </form>
    </div>
  )
}

export default MoreForm