import React from 'react'
import {
  TasksDashboardContainer,
  TDInput,
  TDInputContainer,
} from './TasksDashboard.styles'

export default function TasksDashboard() {
  return (
    <TasksDashboardContainer>
      <div>
        <TDInputContainer>
          <TDInput
            type='text'
            name='task-input'
            id='task-input'
            placeholder='Add task...'
          />
        </TDInputContainer>
        <div aria-hidden>
          <i className='far fa-plus-square' title='Add a task'></i>
        </div>
      </div>
    </TasksDashboardContainer>
  )
}
