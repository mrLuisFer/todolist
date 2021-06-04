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
  const colors = ['var(--blue)', 'var(--green)', 'var(--important-color)']

  return (
    <TDAddTaskSectionContainer>
      <TDAddTaskColorsContainer>
        {colors.map((color) => (
          <TDAddTaskColor bgColor={color} key={color} title='Add a task-color' />
        ))}
      </TDAddTaskColorsContainer>
      <TDAddTaskButton type='button' onClick={closeModalFunc}>
        <i className='far fa-plus-square' title='Add a task' />
        Add Task
      </TDAddTaskButton>
    </TDAddTaskSectionContainer>
  )
}
