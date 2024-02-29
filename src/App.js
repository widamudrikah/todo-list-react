import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import TodosList from './components/TodosList';

const App = () => {

  // ini proses penyimpana di local storage, dilakukan di akhir, kalo pake local storage ketika di refresh dia gga akan hilang
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];

  // ini proses crud
  const [input, setInput] = useState("");
  // const [todos, setTodos] = useState([]);  ini ketika belum pake local storage
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  // ini juga setelah menambahkan local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header/>
        </div>
        <div>
          <Form
            input = {input}
            setInput = {setInput}
            todos = {todos}
            setTodos = {setTodos}
            editTodo = {editTodo}
            setEditTodo = {setEditTodo}
          />
        </div>
        <div>
          <TodosList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
            />
        </div>
      </div>
      
    </div>
  );
}

export default App;
