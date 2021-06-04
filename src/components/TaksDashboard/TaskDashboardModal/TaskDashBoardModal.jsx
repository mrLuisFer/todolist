import React from 'react'

import TDAddTaskSection from './TDAddTaskSection/TDAddTaskSection'

import {
  TasksDashboardModalContainer,
  TDInput,
  TDInputContainer,
  TDTaskDescription,
  TDFullWidth,
  TDTaskDescriptionContainer,
  TDInputInfo,
} from './TaskDashboardModal.styles'

export default function TaskDashBoardModal({ closeModalFunc }) {
  const handleEnterKeyDown = (e) => {
    if (e.key === 'Enter') {
      closeModalFunc()
    }
  }

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
            autoComplete='off'
            onKeyDown={handleEnterKeyDown}
          />
          <TDInputInfo
            className='fas fa-info-circle'
            title='Press Enter for add the task'
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
        <TDAddTaskSection closeModalFunc={closeModalFunc} />
      </TDFullWidth>
    </TasksDashboardModalContainer>
  )
}
