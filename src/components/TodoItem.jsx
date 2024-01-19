import React from 'react'


const styles = {
  todoItem:{
    border: '2px solid #f4f4f4',
    fontSize: '24px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox:{
    marginRight: '10px',
    height: '18px',
    width: '18px',
  }
}

const TodoItem = ({todo, toggleCompleted}) => {

  const getTodoTittleStyle = () => {
    if(todo.completed === true){
      return {textDecoration: 'line-through'}
    }else{
      return {textDecoration: 'none'}
    }
  }
  
  return (
    <div style={styles.todoItem}>
      <input type="checkbox" style={styles.checkbox} onChange={() => toggleCompleted(todo.id)}/> 
      <p style={getTodoTittleStyle()}>{todo.title}</p>
    </div>
    
  )
}

export default TodoItem