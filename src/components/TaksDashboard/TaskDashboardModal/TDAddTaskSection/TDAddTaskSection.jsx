import React from 'react'

import { taskColors } from './taskColors'
import {
  TDAddTaskSectionContainer,
  TDAddTaskColorsContainer,
  TDAddTaskColor,
  TDAddTaskButton,
} from './TDAddTaskSection.styles'

export default function TDAddTaskSection({ submitTaskValue }) {
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
      <TDAddTaskButton type='button' onClick={submitTaskValue}>
        <i className='far fa-plus-square' title='Add a task' />
        Add Task
      </TDAddTaskButton>
    </TDAddTaskSectionContainer>
  )
}
