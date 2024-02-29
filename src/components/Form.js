import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

    // ini untuk update
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => 
            todo.id === id? {title, id, completed} : todo
        )
        setTodos(newTodo);
        setEditTodo("");
    };

    // ini digunakan agar ketika edit data dan ketika datanya sudah diinput dai gaada di state pertama lagi, jadi kalo uah diedit bakalan ilang
    useEffect(() => {
        if(editTodo) {
            setInput(editTodo.title);
        }else {
            setInput("");
        }
    }, [setInput, editTodo])

    const onInputChange = (event) =>{
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        // ini untuk edit ditambahkan ketika edit data
        if(!editTodo) {
            setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
            setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
        
    };

  return (
    <form onSubmit={onFormSubmit}>
        <input
        type="text"
        placeholder='Enter a Todo...'
        className='task-input'
        value={input}
        onChange={onInputChange}
        />


        {/* ini untuk membedakan mana tombol edit dan mana tombol add */}
        <button className='button-add' type="submit">
            {editTodo ? "OK" : "Add"}   
        </button>
    </form>
  )
}

export default Form
