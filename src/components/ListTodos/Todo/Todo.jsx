import React from 'react'

import { LTTodoContainer } from './Todo.styles'

export default function Todo({ taskTitle, description = '' }) {
  return <LTTodoContainer>{taskTitle}</LTTodoContainer>
}
