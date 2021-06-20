import React, { useState } from 'react'
import { TodoInput } from './input.styles'

import {
  LTTodoContainer,
  LTTodoDescription,
  TodoLabel,
  TodoFlex,
} from './Todo.styles'

export default function Todo({
  taskTitle,
  description = '',
  id,
  date,
  deleteTask,
}) {
  const [inputCheck, setInputCheck] = useState(false)
  const [target, setTarget] = useState('')

  const handleIsTaskDonde = (event) => {
    const isChecked = event.target.checked
    const target = event.target
    setInputCheck(isChecked)
    setTarget(target)
  }

  const handleDeleteTask = () => {
    const id = target.id
    deleteTask(id)
  }

  return (
    <LTTodoContainer key={id} isChecked={inputCheck}>
      <TodoFlex>
        <div>
          <TodoInput
            type="checkbox"
            name={`${id}`}
            id={`${id}`}
            onChange={handleIsTaskDonde}
          />
          <TodoLabel htmlFor={`${id}`} isChecked={inputCheck}>
            {taskTitle}
          </TodoLabel>
        </div>
        {inputCheck ? <div onClick={handleDeleteTask}>Trash</div> : ''}
      </TodoFlex>
      {description.length > 5 ? (
        <LTTodoDescription>{description}</LTTodoDescription>
      ) : (
        ''
      )}
      {date ? <p>{date}</p> : ''}
    </LTTodoContainer>
  )
}
