import React, {useState} from 'react'

export const ToDo = () => {


  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState("")

  const addNewItem = () => {
    setItems([...items, newItem])
    setNewItem("")
  }
  return (
                
    <div>
      <div>
        <input type="text" 
        value={newItem} onChange = {() => {setNewItem(event.target.value)}}/>
        <button onClick= {() => addNewItem()}>ADD</button>
      </div>

    {/* Ez egy komment */}
      <div className='lista'>
        {items.map(item => <div>{item}</div>)}   
      </div>
      </div>
  )
}

export default ToDo