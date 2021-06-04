import React from 'react'

import TDAddTaskSection from '../TDAddTaskSection/TDAddTaskSection'

import {
  TasksDashboardModalContainer,
  TDInput,
  TDInputContainer,
  TDTaskDescription,
  TDFullWidth,
  TDTaskDescriptionContainer,
} from './TaskDashboardModal.styles'

export default function TaskDashBoardModal() {
  return (
    <TasksDashboardModalContainer>
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
        <TDAddTaskSection />
      </TDFullWidth>
    </TasksDashboardModalContainer>
  )
}
