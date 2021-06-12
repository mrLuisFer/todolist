import React from 'react'
import { ListTodosStyled } from './ListTodos.styles.jsx'

export default function ListTodos() {
  const tasksValues = localStorage.getItem('tasksValues')
  const tasksValuesParsed = JSON.parse(tasksValues)

  return (
    <ListTodosStyled>
      <p>List of the todos will be here</p>
      {
        tasksValuesParsed.map((tasksValue) => (
          <div key={tasksValue.id}>
            {tasksValue.task}
          </div>
        ))
      }
    </ListTodosStyled>
  )
}
