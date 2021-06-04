import React, { useEffect, useState } from 'react'

import {
  TDTaskDescriptionContainer,
  TDTaskDescription,
  TDOpenDescriptionBtn,
  TDCloseDescriptionBtn,
} from './TaskDashboardDescriptionSection.styles'

export default function TaskDashboardDescriptionSection() {
  const [showDescription, setShowDescription] = useState(false)

  const handleShowDescription = () => {
    setShowDescription(true)
  }

  const handleCloseDescription = () => {
    setShowDescription(false)
  }

  useEffect(() => {
    setShowDescription(false)
  }, [])

  return (
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
          ></TDTaskDescription>
        </TDTaskDescriptionContainer>
      ) : (
        ''
      )}
    </div>
  )
}
