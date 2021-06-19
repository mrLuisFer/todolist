import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'

import TaskDashboardInputSection from './TaskDashboardInputSection/TaskDashboardInputSection'
import TaskDashboardSection from './TaskDashboardSection/TaskDashboardSection'
import TDAddTaskSection from './TDAddTaskSection/TDAddTaskSection'

import {
  TasksDashboardModalContainer,
  TDFullWidth,
} from './TaskDashboardModal.styles'

/**
 *
 * @returns JSX.Element
 */
export default function TaskDashBoardModal({ taskValue, setTaskValue }) {
  const [showDescription, setShowDescription] = useState(false)
  const [taskInput, setTaskInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')
  const [showDate, setShowDate] = useState(false)
  const [dateValue, setDateValue] = useState('')

  const handleChangeTaskValue = (e) => {
    const eventValue = e.target.value
    setTaskInput(eventValue)
  }

  const handleChangeDescriptionValue = (e) => {
    const eventValue = e.target.value
    setDescriptionInput(eventValue)
  }

  const handleChangeDateValue = (e) => {
    const eventValue = e.target.value
    setDateValue(eventValue)
  }

  useEffect(() => {
    setShowDescription(false)
    setShowDate(false)
  }, [])

  // TODO: check that the same task is not rendered, but the following
  const submitTaskValue = async () => {
    if (taskInput.length > 2) {
      await setTaskValue((prevTaskValue) => [
        {
          task: taskInput,
          description: descriptionInput,
          id: nanoid(),
          date: dateValue,
        },
        ...prevTaskValue,
      ])

      try {
        localStorage.setItem('tasksValues', JSON.stringify(taskValue))
        setTaskInput('')
        setDescriptionInput('')
        setDateValue('')
      } catch (error) {
        console.log(error)
      }

      console.log(taskValue)
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
        <TaskDashboardSection
          showSection={showDescription}
          setShowFunc={setShowDescription}
          valueInput={descriptionInput}
          handleChangeValue={handleChangeDescriptionValue}
          textShowed="Description"
        />
        {/* * * * * * * * * * * * * * * * * * * * * * * * * *  * * * */}
        <TaskDashboardSection
          showSection={showDate}
          setShowFunc={setShowDate}
          valueInput={dateValue}
          handleChangeValue={handleChangeDateValue}
          textShowed="Date"
          textareaHeight="30"
        />
        {/* * * * * * * * * * * * * * * * * * * * * * * * * *  * * * */}
        <TDAddTaskSection submitTaskValue={submitTaskValue} />
        {/* * * * * * * * * * * * * * * * * * * * * * * * * *  * * * */}
      </TDFullWidth>
    </TasksDashboardModalContainer>
  )
}
