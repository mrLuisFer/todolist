import React from 'react'
import {
  TDAddTaskSectionContainer,
  TDAddTaskColorsContainer,
  TDAddTaskColor,
  TDAddTaskButton,
} from './TDAddTaskSection.styles'

/**
 *
 * @returns JSX.Element
 */
export default function TDAddTaskSection({ closeModalFunc }) {
  return (
    <TDAddTaskSectionContainer>
      <TDAddTaskColorsContainer>
        <TDAddTaskColor bgColor='var(--blue)' />
        <TDAddTaskColor bgColor='var(--green)' />
        <TDAddTaskColor bgColor='var(--important-color)' />
      </TDAddTaskColorsContainer>
      <TDAddTaskButton type='button' onClick={closeModalFunc}>
        <i className='far fa-plus-square' title='Add a task' />
        Add Task
      </TDAddTaskButton>
    </TDAddTaskSectionContainer>
  )
}
