import React, { useState } from 'react'
import TodoForm from './todoForm';
import Todolist from './todolist';
import { RiCloseCircleLine } from "react-icons/ri"
import { TiEdit } from "react-icons/ti"

export default function Todo({todos, completeTodo, deleteTodo, editTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        editTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index)=>(
        <div className={todo.isComplete ? "todo-row complete" : "todo-row"}
            key={index}>
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </div>
                <div>
                    <RiCloseCircleLine onClick={() => deleteTodo(todo.id)}/>
                    <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text})}/>
                </div>

        </div>
    ))
}
