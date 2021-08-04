import React, { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import TodoForm from "./todoForm";
import Todo from "./todo";


export default function Todolist() {
        const [todos, setTodos] = useLocalStorage("todo", "")

         const addTodo = todo => {
            if(!todo.text){
                return
            }
            const newTodos = [todo,...todos]
            setTodos(newTodos)
        } 
         
        const completeTodo = id => {
            let updatedTodos = todos.map(todo => {
                if(todo.id === id){
                    todo.isComplete = !todo.isComplete
                } 
                return todo
            });
            setTodos(updatedTodos)
        }

        const deleteTodo = id => {
            const removeArr = [...todos].filter(todo => 
                todo.id !== id)
                setTodos(removeArr)
        }

        const editTodo = (todoId, newValue) => {
            if(!newValue.text){
                return;
            } 
            setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
        }

        useEffect(() => {
            localStorage.setItem("todo", JSON.stringify(todos))
        }, [todos])

    return (
        <div>
            <h1>Todo List</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo 
            todos={todos}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            updateTodo={editTodo}/>
        </div>
    )
}
