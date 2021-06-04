import Modal from 'components/Modal/Modal'
import React, { useState } from 'react'
import TaskDashBoardModal from './TaskDashboardModal/TaskDashBoardModal'

import { TasksDashboardContainer } from './TasksDashboard.styles'

export default function TasksDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <TasksDashboardContainer>
      <button type='button' onClick={handleOpenModal}>
        Add task
      </button>
      {isModalOpen ? (
        <Modal
          jsxComponent={<TaskDashBoardModal />}
          elementId='task-modal'
          closeFunc={handleCloseModal}
        />
      ) : (
        ''
      )}
    </TasksDashboardContainer>
  )
}
