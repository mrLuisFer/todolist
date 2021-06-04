import React from 'react'

import {
  TDInputInfo,
  TDInput,
  TDInputContainer,
} from './TaskDashboardInputSection.styles'

/**
 *
 * @param {Function} closeModalFunc
 * @returns JSX.Element
 */
export default function index({ closeModalFunc }) {
  const handleEnterKeyDown = (e) => {
    if (e.key === 'Enter') {
      closeModalFunc()
    }
  }

  return (
    <TDInputContainer>
      <TDInput
        type='text'
        name='task-input'
        id='task-input'
        placeholder='Add task...'
        required
        autoComplete='off'
        onKeyDown={handleEnterKeyDown}
      />
      <TDInputInfo className='fas fa-info-circle' title='Press Enter for add the task' />
    </TDInputContainer>
  )
}
