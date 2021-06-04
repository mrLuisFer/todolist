import React from 'react'
import { TDAddTaskSectionContainer } from './TDAddTaskSection.styles'

export default function TDAddTaskSection() {
  return (
    <TDAddTaskSectionContainer>
      <button type='button'>
        <i className='far fa-plus-square' title='Add a task' />
        Add Task
      </button>
    </TDAddTaskSectionContainer>
  )
}
