import React, { useState } from 'react';

function Todo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Not Completed');
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleUpdate = () => {
    if (editIndex !== null) {
      const updatedTodos = todos.map((todo, index) =>
        index === editIndex ? { title, description, status } : todo
      );
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, { title, description, status }]);
    }

    setTitle('');
    setDescription('');
    setStatus('Not Completed');
  };

  const handleEdit = (index) => {
    const todo = todos[index];
    setTitle(todo.title);
    setDescription(todo.description);
    setStatus(todo.status);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className='container'>
      <h3>Todo App</h3>
      <div className='main'>
        <input
          placeholder='Title'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder='Description'
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value='Completed'>Completed</option>
          <option value='Not Completed'>Not Completed</option>
        </select>
        <button onClick={handleUpdate}>
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <div key={index} className='todo-item'>
            <p className='ptag'>{todo.title}</p>
            <p className='ptag'>{todo.description}</p>
            <p className='ptag'>Status: {todo.status}</p>
            <div className='buttons'>
              <button onClick={() => handleEdit(index)}>Edit</button>
            </div>
            <div className='buttons'>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
