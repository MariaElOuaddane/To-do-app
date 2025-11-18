import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './Store'

function TodosInput() {
    const[text, setText]= useState('')
    const dispatch= useDispatch()

    function handleAdd(t){
        dispatch(addTodo(t))
        setText('')
    }

  return (
    <div className='Add-form'>
        <input type='text'
        value={text} 
        onChange={(e)=>setText(e.target.value)}/>
        <button onClick={()=>handleAdd(text)}>Add</button>
    </div>
  )
}

export default TodosInput