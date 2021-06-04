import Modal from 'components/Modal/Modal'
import React from 'react'

import TaskDashBoardModal from './TaskDashboardModal/TaskDashBoardModal'

export default function TasksDashboard() {
  return (
    <div>
      <h1>Add task</h1>
      <Modal jsxComponent={<TaskDashBoardModal />} elementId='task-modal' />
    </div>
  )
}
