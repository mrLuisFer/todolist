import Modal from 'components/Modal/Modal'
import React, { useEffect, useState } from 'react'
import TaskDashBoardModal from './TaskDashboardModal/TaskDashBoardModal'

import { TasksDashboardContainer, TasksDashboardButton } from './TasksDashboard.styles'

export default function TasksDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    handleCloseModal()
  }, [])

  return (
    <TasksDashboardContainer>
      <TasksDashboardButton type='button' onClick={handleOpenModal}>
        <i className='fas fa-plus' title='Click to add a task' />
        Add task
      </TasksDashboardButton>
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
