import React from 'react'
import Todo from './Todo/Todo'

import { ListTodosStyled } from './ListTodos.styles.js'

export default function ListTodos({ tasksValue }) {
  return (
    <ListTodosStyled>
      <p>List of the todos will be here</p>
      {tasksValue.map((todoValue) => (
        <Todo key={todoValue.id} taskTitle={todoValue.task} />
      ))}
    </ListTodosStyled>
  )
}
