import React, {useState} from 'react'

const Tab = ({tabs}) => {
    const [visibleId, setVisableId] = useState(0)
  return (
    <div>
        {tabs.map(tab => {
            return(
                <button key={tab.id} onClick={e => setVisableId(tab.id)}>{tab.header}</button>
            )
        })}
        {tabs.map(tab => {
            return(
            <div key={tab.id}>{visibleId === tab.id && tab.content}</div>
            )
        })}

    </div>
  )
}

export default Tab