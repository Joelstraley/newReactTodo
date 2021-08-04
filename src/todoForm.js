import React, { useState } from 'react'

export default function TodoInput(props) {
    const [input, setInput] = useState("");

    const handleChange = e => {
        setInput(e.target.value)
    }


    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('')
    }

 
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            value={input}
            placeholder="What to do today?"
            name="text" 
            onChange={handleChange}/>
            <button >Add Todo</button>
        </form>
    )
}
