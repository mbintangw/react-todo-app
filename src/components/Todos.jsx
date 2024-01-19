import React from 'react'
import TodoItem from './TodoItem'


const styles = {
  container: {
    width: '40%',
    margin: '0 auto',
  },
}

const Todos = ({todos, toggleCompleted}) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} toggleCompleted={toggleCompleted} />
      })}
    </div>
  )
}

export default Todos
