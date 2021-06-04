import React from 'react'

import TaskDashboardDescriptionSection from './TaskDashboardDescriptionSection/'
import TaskDashboardInputSection from './TaskDashboardInputSection'
import TDAddTaskSection from './TDAddTaskSection/TDAddTaskSection'

import { TasksDashboardModalContainer, TDFullWidth } from './TaskDashboardModal.styles'

export default function TaskDashBoardModal({ closeModalFunc }) {
  return (
    <TasksDashboardModalContainer>
      <TDFullWidth>
        <TaskDashboardInputSection />
        <TaskDashboardDescriptionSection closeModalFunc={closeModalFunc} />
        <TDAddTaskSection closeModalFunc={closeModalFunc} />
      </TDFullWidth>
    </TasksDashboardModalContainer>
  )
}
