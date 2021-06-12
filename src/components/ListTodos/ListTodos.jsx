import React from 'react'
import Todo from './Todo/Todo'

import { ListTodosStyled, ListTodosTitle } from './ListTodos.styles.js'

export default function ListTodos({ tasksValue }) {
  return (
    <ListTodosStyled>
      <ListTodosTitle>Todos:</ListTodosTitle>
      {tasksValue.map((todoValue) => (
        <Todo
          key={todoValue.id}
          taskTitle={todoValue.task}
          id={todoValue.id}
          description={todoValue.description}
        />
      ))}
    </ListTodosStyled>
  )
}
