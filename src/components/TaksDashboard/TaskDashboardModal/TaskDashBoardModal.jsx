import React from 'react'

import TaskDashboardDescriptionSection from './TaskDashboardDescriptionSection/'
import TaskDashboardInputSection from './TaskDashboardInputSection'
import TDAddTaskSection from './TDAddTaskSection/TDAddTaskSection'

import { TasksDashboardModalContainer, TDFullWidth } from './TaskDashboardModal.styles'

/**
 *
 * @param {Function} closeModalFunc
 * @returns JSX.Element
 */
export default function TaskDashBoardModal({ closeModalFunc }) {
  return (
    <TasksDashboardModalContainer>
      <TDFullWidth>
        <TaskDashboardInputSection />
        <TaskDashboardDescriptionSection />
        <TDAddTaskSection />
      </TDFullWidth>
    </TasksDashboardModalContainer>
  )
}
