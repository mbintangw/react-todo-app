import React, { useState } from 'react'
import Todos from './components/Todos'
import './App.css'


const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  tittle: {
    fontSize: '36px',
  }
}

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

  return (
    <div style={styles.container}>
      <h1 style={styles.tittle}>My Todo List</h1>
      <Todos todos={todos} toggleCompleted={toggleCompleted}/>
    </div>
  )
}

export default App
