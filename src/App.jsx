import React, { useState } from 'react'
import './App.css'

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

  console.log(todos)

  return (
    <div>
      <h1>My Todo List</h1>
      {todos.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>
      })}
    </div>
  )
}

export default App
