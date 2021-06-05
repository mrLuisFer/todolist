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
export default function TDAddTaskSection() {
  return (
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
      <TDAddTaskButton type='button'>
        <i className='far fa-plus-square' title='Add a task' />
        Add Task
      </TDAddTaskButton>
    </TDAddTaskSectionContainer>
  )
}
