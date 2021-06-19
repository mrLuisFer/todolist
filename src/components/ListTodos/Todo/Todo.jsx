import React, { useState } from 'react'
import { TodoInput } from './input.styles'

import {
  LTTodoContainer,
  LTTodoDescription,
  TodoLabel,
  TodoFlex,
} from './Todo.styles'

export default function Todo({ taskTitle, description = '', id, date }) {
  const [inputCheck, setInputCheck] = useState(false)

  const handleIsTaskDonde = (event) => {
    const isChecked = event.target.checked
    console.log(isChecked)
    setInputCheck(isChecked)
  }

  return (
    <LTTodoContainer key={id} isChecked={inputCheck}>
      <TodoFlex>
        <TodoInput
          type="checkbox"
          name={`isTaskDone-${id}`}
          id={`isTaskDone-${id}`}
          onChange={handleIsTaskDonde}
        />
        <TodoLabel htmlFor={`isTaskDone-${id}`} isChecked={inputCheck}>
          {taskTitle}
        </TodoLabel>
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
