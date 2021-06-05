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
export default function index() {
  const handleEnterKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('enter')
    }
  }

  const handleChangeTaskValue = (e) => {
    console.log(e.target.value)
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
        value=''
        onChange={handleChangeTaskValue}
      />
      <TDInputInfo className='fas fa-info-circle' title='Press Enter for add the task' />
    </TDInputContainer>
  )
}
