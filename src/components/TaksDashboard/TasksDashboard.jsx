import React from 'react'
import {
  TasksDashboardContainer,
  TDInput,
  TDInputContainer,
  TDTaskDescription,
  TDFullWidth,
  TDTaskDescriptionContainer,
  TDAddTaskSection,
} from './TasksDashboard.styles'

export default function TasksDashboard() {
  return (
    <TasksDashboardContainer>
      <TDFullWidth>
        <TDInputContainer>
          <TDInput
            type='text'
            name='task-input'
            id='task-input'
            placeholder='Add task...'
            required
          />
        </TDInputContainer>
        <TDTaskDescriptionContainer>
          <TDTaskDescription
            name='task-description'
            id='task-description'
            cols='20'
            rows='4'
            placeholder='Some description?'
          ></TDTaskDescription>
        </TDTaskDescriptionContainer>
        <TDAddTaskSection>
          <button type='button'>
            <i className='far fa-plus-square' title='Add a task' />
            Add Task
          </button>
        </TDAddTaskSection>
      </TDFullWidth>
    </TasksDashboardContainer>
  )
}
