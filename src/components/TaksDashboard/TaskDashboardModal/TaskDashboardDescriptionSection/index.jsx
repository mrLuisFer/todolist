import React, { useEffect, useState } from 'react'

import {
  TDTaskDescriptionContainer,
  TDTaskDescription,
  TDOpenDescriptionBtn,
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
          <button onClick={handleCloseDescription}>X</button>
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
