import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'

import {
  TDInputInfo,
  TDInput,
  TDInputContainer,
} from './TaskDashboardInputSection/TaskDashboardInputSection.styles'

import TaskDashboardDescriptionSection from './TaskDashboardDescriptionSection/TaskDashboardDescriptionSection'
import TDAddTaskSection from './TDAddTaskSection/TDAddTaskSection'

import { TasksDashboardModalContainer, TDFullWidth } from './TaskDashboardModal.styles'

/**
 *
 * @returns JSX.Element
 */
export default function TaskDashBoardModal() {
  const [showDescription, setShowDescription] = useState(false)
  const [taskInput, setTaskInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')
  const [taskValue, setTaskValue] = useState([
    {
      task: 'Example',
      description: 'Add a new task',
      id: 0,
    },
  ])

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

  const submitTaskValue = () => {
    if (taskInput.length > 2) {
      setTaskValue([
        ...taskValue,
        { task: taskInput, description: descriptionInput, id: nanoid() },
      ])

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
        {/* * * * * * * * * * * * * * * * * * * * * * * * * *  * * * */}
        <TDInputContainer>
          <TDInput
            type='text'
            name='task-input'
            id='task-input'
            placeholder='Add task...'
            required
            autoComplete='off'
            onKeyDown={handleEnterKeyDown}
            value={taskInput}
            onChange={handleChangeTaskValue}
          />
          <TDInputInfo
            className='fas fa-info-circle'
            title='Press Enter for add the task'
          />
        </TDInputContainer>
        {/* * * * * * * * * * * * * * * * * * * * * * * * * *  * * * */}
        {/* * * * * * * * * * * * * * * * * * * * * * * * * *  * * * */}
        <TaskDashboardDescriptionSection
          showDescription={showDescription}
          setShowDescription={setShowDescription}
          descriptionInput={descriptionInput}
          handleChangeDescriptionValue={handleChangeDescriptionValue}
        />
        {/* * * * * * * * * * * * * * * * * * * * * * * * * *  * * * */}
        {/* * * * * * * * * * * * * * * * * * * * * * * * * *  * * * */}
        <TDAddTaskSection submitTaskValue={submitTaskValue} />
        {/* * * * * * * * * * * * * * * * * * * * * * * * * *  * * * */}
        {/* * * * * * * * * * * * * * * * * * * * * * * * * *  * * * */}
      </TDFullWidth>
    </TasksDashboardModalContainer>
  )
}
