import React from 'react'

const Item = ({name, completed, visable, setList, list}) => {
  return (
    <div>
        <form>
            <div>
                <label>
                    {name}
                    <input type="checkbox" checked={completed}/>
                </label>
            </div>
        </form>
    </div>
  )
}

export default Item