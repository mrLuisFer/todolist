import React from 'react'

import TaskDashboardDescriptionSection from './TaskDashboardDescriptionSection/'
import TDAddTaskSection from './TDAddTaskSection/TDAddTaskSection'

import {
  TasksDashboardModalContainer,
  TDInput,
  TDInputContainer,
  TDFullWidth,
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
        <TaskDashboardDescriptionSection />
        <TDAddTaskSection closeModalFunc={closeModalFunc} />
      </TDFullWidth>
    </TasksDashboardModalContainer>
  )
}
