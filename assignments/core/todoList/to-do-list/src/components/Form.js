import React, {useState} from 'react'

const Form = ({handleChange, state}) => {

    return (
    <div>
        <form onSubmit={e => {e.preventDefault()}}>
            <div>
                <label> Item:
                    <input name="name" type="text" value={state.name} onChange={handleChange}/>
                </label>
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}

export default Form