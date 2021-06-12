import React from 'react'

import { LTTodoContainer } from './Todo.styles'

export default function Todo({ taskTitle, description = '', id }) {
  return <LTTodoContainer key={id}>{taskTitle}</LTTodoContainer>
}
