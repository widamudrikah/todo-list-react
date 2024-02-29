import React from 'react'

const TodosList = ({ todos, setTodos, setEditTodo }) => {

  // ini untuk compeleted
  const handleCompelete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {...item, completed: !item.completed};
        }
        return item;
      })
    )
  }

  // ini untuk edit
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo)
  }

  // ini untuk hapus
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            // ini untuk membedakan dia udah di centang apa belum
            className={`list ${todo.completed ? "compelete" : ""} `}
            onChange={(event) => event.preventDefault()}
          />

          <div>
            {/* ini ketika tugas selesai dilaksanakan */}
            <button className='button-compelete task-button' onClick={() => handleCompelete(todo)}>
              <i className='fa fa-check-circle'></i>
            </button>

            {/* ini untuk dedit */}
            <button className='button-edit task-button' onClick={() => handleEdit(todo)}>
              <i className='fa fa-edit'></i>
            </button>

            {/* ini button untuk hapus */}
            <button className='button-delete task-button' onClick={() => handleDelete(todo)}>
              <i className='fa fa-trash'></i>
            </button>

          </div>
        </li>
      ))}
    </div>
  );
};

export default TodosList
