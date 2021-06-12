import React, { useState, useEffect } from 'react'
import { ListTodosStyled } from './ListTodos.styles.jsx'

export default function ListTodos({tasksValue}) {

  return (
    <ListTodosStyled>
      <p>List of the todos will be here</p>
      {tasksValue.map((todoValue) => (
        <div key={todoValue.id}>{todoValue.task}</div>
      ))}
    </ListTodosStyled>
  )
}
