import React, {useState} from 'react'


const ColorForm = ({setState, state}) => {
  const [box, setBox] = useState({});
  console.log(state)
  return (
    <div>
    <form onSubmit={e => { e.preventDefault(); setState([box, ...state]); setBox=({color: ""})}}>
        <div>
            <label>
                <input onChange={e => setBox({color: e.target.value})} type="text"/>
            </label>
            <input type="submit" />
        </div>
    </form>
    </div>
  )
}

export default ColorForm