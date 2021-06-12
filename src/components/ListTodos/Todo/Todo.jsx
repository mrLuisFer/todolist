import React, { useState } from 'react'

import { LTTodoContainer, LTTodoDescription, LTTodoTitle } from './Todo.styles'

export default function Todo({ taskTitle, description = '', id }) {
  const [inputCheck, setInputCheck] = useState(false)

  const handleIsTaskDonde = (event) => {
    let isChecked = event.target.checked
    console.log(isChecked)
    setInputCheck(isChecked)
  }

  return (
    <LTTodoContainer key={id} isChecked={inputCheck}>
      <div>
        <LTTodoTitle isChecked={inputCheck}>
          <input
            type='checkbox'
            name={`isTaskDone-${id}`}
            id={`isTaskDone-${id}`}
            onChange={handleIsTaskDonde}
          />
          <label htmlFor={`isTaskDone-${id}`}>{taskTitle}</label>
        </LTTodoTitle>
        <div></div>
      </div>
      {description.length > 5 ? <LTTodoDescription>{description}</LTTodoDescription> : ''}
    </LTTodoContainer>
  )
}
