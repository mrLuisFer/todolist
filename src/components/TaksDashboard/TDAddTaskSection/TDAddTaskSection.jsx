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
export default function TDAddTaskSection() {
  return (
    <TDAddTaskSectionContainer>
      <TDAddTaskColorsContainer>
        <TDAddTaskColor></TDAddTaskColor>
        <TDAddTaskColor></TDAddTaskColor>
      </TDAddTaskColorsContainer>
      <TDAddTaskButton type='button'>
        <i className='far fa-plus-square' title='Add a task' />
        Add Task
      </TDAddTaskButton>
    </TDAddTaskSectionContainer>
  )
}
