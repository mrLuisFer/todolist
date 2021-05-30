import React from 'react'
import { TasksDashboardContainer } from './TasksDashboard.styles'

export default function TasksDashboard() {
  return (
    <TasksDashboardContainer>
      <input type='text' name='task-input' id='task-input' />
      <div aria-hidden>
        <i className='far fa-plus-square'></i>
      </div>
    </TasksDashboardContainer>
  )
}
