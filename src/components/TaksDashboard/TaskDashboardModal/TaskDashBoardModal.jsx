import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'

import TaskDashboardInputSection from './TaskDashboardInputSection/TaskDashboardInputSection'
import TaskDashboardDescriptionSection from './TaskDashboardDescriptionSection/TaskDashboardDescriptionSection'
import TDAddTaskSection from './TDAddTaskSection/TDAddTaskSection'

import { TasksDashboardModalContainer, TDFullWidth } from './TaskDashboardModal.styles'

/**
 *
 * @returns JSX.Element
 */
export default function TaskDashBoardModal({ taskValue, setTaskValue }) {
  const [showDescription, setShowDescription] = useState(false)
  const [taskInput, setTaskInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')

  const handleChangeTaskValue = (e) => {
    const eventValue = e.target.value
    setTaskInput(eventValue)
  }

  const handleChangeDescriptionValue = (e) => {
    const eventValue = e.target.value
    setDescriptionInput(eventValue)
  }

  useEffect(() => {
    setShowDescription(false)
  }, [])

  // TODO: check that the same task is not rendered, but the following
  const submitTaskValue = () => {
    if (taskInput.length > 2) {
      setTaskValue([
        ...taskValue,
        { task: taskInput, description: descriptionInput, id: nanoid() },
      ])

      try {
        localStorage.setItem('tasksValues', JSON.stringify(taskValue))
      } catch (error) {
        console.log(error)
      }

      console.log(localStorage.getItem('tasksValues'))

      console.log(taskValue)
      setTaskInput('')
      setDescriptionInput('')
    }
  }

  const handleEnterKeyDown = (e) => {
    if (e.key === 'Enter') {
      submitTaskValue()
    }
  }

  return (
    <TasksDashboardModalContainer>
      <TDFullWidth>
        {/* * * * * * * * * * * * * * * * * * * * * * * * * *  * * * */}
        <TaskDashboardInputSection
          handleEnterKeyDown={handleEnterKeyDown}
          taskInput={taskInput}
          handleChangeTaskValue={handleChangeTaskValue}
        />
        {/* * * * * * * * * * * * * * * * * * * * * * * * * *  * * * */}
        <TaskDashboardDescriptionSection
          showDescription={showDescription}
          setShowDescription={setShowDescription}
          descriptionInput={descriptionInput}
          handleChangeDescriptionValue={handleChangeDescriptionValue}
        />
        {/* * * * * * * * * * * * * * * * * * * * * * * * * *  * * * */}
        <TDAddTaskSection submitTaskValue={submitTaskValue} />
        {/* * * * * * * * * * * * * * * * * * * * * * * * * *  * * * */}
      </TDFullWidth>
    </TasksDashboardModalContainer>
  )
}
