import React from 'react'

import {
  TDInputInfo,
  TDInput,
  TDInputContainer,
} from './TaskDashboardInputSection.styles'

export default function TaskDashboardInputSection({
  handleEnterKeyDown,
  taskInput,
  handleChangeTaskValue,
}) {
  return (
    <TDInputContainer>
      <TDInput
        type="text"
        name="task-input"
        id="task-input"
        placeholder="Add task..."
        required
        autoComplete="off"
        onKeyDown={handleEnterKeyDown}
        value={taskInput}
        onChange={handleChangeTaskValue}
      />
      <TDInputInfo
        className="fas fa-info-circle"
        title="Press Enter for add the task"
      />
    </TDInputContainer>
  )
}
