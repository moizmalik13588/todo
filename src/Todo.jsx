import React, { useState } from 'react';
import styles from './styles'

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [isEdit, setIsEdit] = useState(null);
  const [saveInput, setSaveInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (input !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  const editTodo = (index) => {
    setIsEdit(index);
    setSaveInput(todos[index]);
  };

  const saveEditTodo = (index) => {
    todos[index] = saveInput; 
    setTodos([...todos]);
    setIsEdit(null);
    setSaveInput('');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Todo App</h1>
      <form onSubmit={addTodo} style={styles.form}>
        <input 
          onChange={(e) => setInput(e.target.value)} 
          type="text" 
          placeholder="Enter todo" 
          value={input} 
          style={styles.input} 
        />
        <button type="submit" style={styles.button}>Add Todo</button>
      </form>
      <ol style={styles.todoList}>
        {todos.length > 0 ? (
          todos.map((item, index) => (
            <li key={index} style={styles.todoItem}>
              {isEdit === index ? (
                <>
                  <input
                    type="text"
                    value={saveInput}
                    onChange={(e) => setSaveInput(e.target.value)}
                    style={styles.editInput}
                  />
                  <button onClick={() => saveEditTodo(index)} style={styles.saveButton}>Save</button>
                </>
              ) : (
                <>
                  <span style={styles.todoText}>{item}</span>
                  <button onClick={() => editTodo(index)} style={styles.editButton}>Edit</button>
                  <button onClick={() => deleteTodo(index)} style={styles.deleteButton}>Delete</button>
                </>
              )}
            </li>
          ))
        ) : (
          <h2 style={styles.noItems}>No items found...</h2>
        )}
      </ol>
    </div>
  );
}



export default Todo;