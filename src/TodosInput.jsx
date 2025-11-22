import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './Store'

function TodosInput() {
    const[text, setText]= useState('')
    const dispatch= useDispatch()

    function handleAdd() {
      const trimmed = text.trim();
      if (!trimmed) return;
      dispatch(addTodo(trimmed));
      setText('');
    }

  return (
    <>
    <h1 style={{textAlign:'center'}}>To-do list</h1>
    <div className='Add-form'>
        <input type='text'
        value={text} 
        onChange={(e)=>setText(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
    </div>
    </>
  )
}

export default TodosInput