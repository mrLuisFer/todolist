import React from 'react'

import {
  TDTaskDescriptionContainer,
  TDTaskDescription,
  TDOpenDescriptionBtn,
  TDCloseDescriptionBtn,
} from './TaskDashboardDescriptionSection.styles'

export default function TaskDashboardDescriptionSection({
  showDescription,
  setShowDescription,
  descriptionInput,
  handleChangeDescriptionValue,
}) {
  const handleShowDescription = () => {
    setShowDescription(true)
  }

  const handleCloseDescription = () => {
    setShowDescription(false)
  }

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
            <i className="fas fa-times" title="Cancel Description" />
          </TDCloseDescriptionBtn>
          <TDTaskDescription
            name="task-description"
            id="task-description"
            cols="20"
            rows="4"
            placeholder="Some description?"
            value={descriptionInput}
            onChange={handleChangeDescriptionValue}
          ></TDTaskDescription>
        </TDTaskDescriptionContainer>
      ) : (
        ''
      )}
    </div>
  )
}
