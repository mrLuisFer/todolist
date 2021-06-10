import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'

import {
  TDInputInfo,
  TDInput,
  TDInputContainer,
} from './TaskDashboardInputSection/TaskDashboardInputSection.styles'

import {
  TDTaskDescriptionContainer,
  TDTaskDescription,
  TDOpenDescriptionBtn,
  TDCloseDescriptionBtn,
} from './TaskDashboardDescriptionSection/TaskDashboardDescriptionSection.styles'

import { taskColors } from './TDAddTaskSection/taskColors'

import {
  TDAddTaskSectionContainer,
  TDAddTaskColorsContainer,
  TDAddTaskColor,
  TDAddTaskButton,
} from './TDAddTaskSection/TDAddTaskSection.styles'

import { TasksDashboardModalContainer, TDFullWidth } from './TaskDashboardModal.styles'

/**
 *
 * @param {Function} closeModalFunc
 * @returns JSX.Element
 */
export default function TaskDashBoardModal({ closeModalFunc }) {
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
    console.log(eventValue)
    setTaskInput(eventValue)
  }

  const handleChangeDescriptionValue = (e) => {
    const eventValue = e.target.value
    console.log(eventValue)
    setDescriptionInput(eventValue)
  }

  const handleShowDescription = () => {
    setShowDescription(true)
  }

  const handleCloseDescription = () => {
    setShowDescription(false)
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
      console.log('enter')
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
        <div>
          {showDescription ? (
            ''
          ) : (
            <TDOpenDescriptionBtn onClick={handleShowDescription}>
              Description?
            </TDOpenDescriptionBtn>
          )}
          {showDescription ? (
            <TDTaskDescriptionContainer>
              <TDCloseDescriptionBtn onClick={handleCloseDescription}>
                <i className='fas fa-times' title='Cancel Description' />
              </TDCloseDescriptionBtn>
              <TDTaskDescription
                name='task-description'
                id='task-description'
                cols='20'
                rows='4'
                placeholder='Some description?'
                value={descriptionInput}
                onChange={handleChangeDescriptionValue}
              ></TDTaskDescription>
            </TDTaskDescriptionContainer>
          ) : (
            ''
          )}
        </div>
        {/* * * * * * * * * * * * * * * * * * * * * * * * * *  * * * */}
        {/* * * * * * * * * * * * * * * * * * * * * * * * * *  * * * */}
        <TDAddTaskSectionContainer>
          <TDAddTaskColorsContainer>
            {taskColors.map((taskColor) => (
              <TDAddTaskColor
                bgColor={taskColor.color}
                key={taskColor.color}
                title={taskColor.titleInfo}
              />
            ))}
          </TDAddTaskColorsContainer>
          <TDAddTaskButton type='button' onClick={submitTaskValue}>
            <i className='far fa-plus-square' title='Add a task' />
            Add Task
          </TDAddTaskButton>
        </TDAddTaskSectionContainer>
        {/* * * * * * * * * * * * * * * * * * * * * * * * * *  * * * */}
        {/* * * * * * * * * * * * * * * * * * * * * * * * * *  * * * */}
      </TDFullWidth>
    </TasksDashboardModalContainer>
  )
}
