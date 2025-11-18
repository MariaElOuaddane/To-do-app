import React, { useState , useEffect } from 'react'
import { deleteTodo, toggleTodo} from './Store'
import { useDispatch, useSelector } from 'react-redux'

function TodosList() {
    const dispatch=useDispatch()
    const [statu, setStatu] =useState([])
    const todos= useSelector((state)=> state.todosList)
    const doneTodos= todos.filter((t)=>t.completed===true)
    const notDoneTodos= todos.filter((t)=>t.completed===false)

    useEffect(() => {
        setStatu(todos);
    }, [todos]);

  return (
    <div>
        <ul className='All-todos'>
            <div className='detail'>
                <button onClick={() => setStatu(todos)}>All : {todos.length}</button>
                <button onClick={() => setStatu(doneTodos)} >Done : {doneTodos.length}</button>
                <button onClick={() => setStatu(notDoneTodos)} >Not Done : {notDoneTodos.length}</button>
            </div>

            {statu.map((t)=>(
                <li className={t.completed ? 'true-todo' : 'fale-todo'} key={t.id}>
                    <input type='checkbox'
                    checked={t.completed} 
                    onChange={()=>dispatch(toggleTodo(t.id))}/>

                    <p>{t.text}</p>

                    <button 
                    onClick={()=>dispatch(deleteTodo(t.id))}>🧹</button>
                </li>
            ))}
        
        </ul>
    </div>
  )
}

export default TodosList