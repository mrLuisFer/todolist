import React from 'react'
import { taskColors } from './taskColors'

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
        {taskColors.map((color) => (
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
