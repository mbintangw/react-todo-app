import React, { useState } from 'react'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'



function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false
    },
    {
      id: 2,
      title: 'Have lunch with guru Domba',
      completed: false
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false
    },
  ])

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId){
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId)
    setTodos(updatedTodos)
  }

  const addTodo = (todoTitle) => {
    if(todoTitle === ''){
      return
    }
    
    const newTodo = {
    id: todos.length + 1,
    title: todoTitle,
    completed: false,
    }
    
    const updateTodos = todos.concat(newTodo)
    
    setTodos(updateTodos)
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.tittle}>My Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      <Todos todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo}/>
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  tittle: {
    fontSize: '36px',
  }
}

export default App
