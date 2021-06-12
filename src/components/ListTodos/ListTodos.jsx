import React, { useState } from 'react'
import { ListTodosStyled } from './ListTodos.styles.jsx'

export default function ListTodos() {
  const [tasksValuesParsed, setTasksValuesParsed] = useState([])
  const tasksValues = localStorage.getItem('tasksValues')

  if (tasksValues !== null && tasksValues !== undefined) {
    setTasksValuesParsed(JSON.parse(tasksValues))
  }

  return (
    <ListTodosStyled>
      <p>List of the todos will be here</p>
      {tasksValuesParsed.map((tasksValue) => (
        <div key={tasksValue.id}>{tasksValue.task}</div>
      ))}
    </ListTodosStyled>
  )
}
