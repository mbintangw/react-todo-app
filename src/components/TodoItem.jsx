import React from 'react'


const styles = {
  todoItem:{
    border: '2px solid #f4f4f4',
    fontSize: '24px',
  },
}
const TodoItem = ({todo}) => {
  return (
    <div style={styles.todoItem}>
      <p>{todo.title}</p>
    </div>
    
  )
}

export default TodoItem