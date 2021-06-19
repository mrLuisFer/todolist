import React from 'react'

import {
  TDTaskDescriptionContainer,
  TDTaskDescription,
  TDOpenDescriptionBtn,
  TDCloseDescriptionBtn,
} from './TaskDashboardDescriptionSection.styles'

/**
 * @param {String} showSection
 * @param {Function} setShowFunc
 * @param {String} valueInput
 * @param {Function} handleChangeValue
 * @param {String} textShowed
 * @param {Number} textareaHeight
 * @returns {JSX.Element}
 */
export default function TaskDashboardSection({
  showSection,
  setShowFunc,
  valueInput,
  handleChangeValue,
  textShowed = '',
  textareaHeight,
}) {
  const handleShowDescription = () => {
    setShowFunc(true)
  }

  const handleCloseDescription = () => {
    setShowFunc(false)
  }

  return (
    <div>
      {showSection ? (
        ''
      ) : (
        <TDOpenDescriptionBtn onClick={handleShowDescription}>
          {textShowed}?
        </TDOpenDescriptionBtn>
      )}
      {showSection ? (
        <TDTaskDescriptionContainer>
          <TDCloseDescriptionBtn onClick={handleCloseDescription}>
            <i className="fas fa-times" title="Cancel Section" />
          </TDCloseDescriptionBtn>
          <TDTaskDescription
            name="task-description"
            id="task-description"
            cols="20"
            rows="4"
            placeholder={`Some ${textShowed.toLocaleLowerCase()}?`}
            value={valueInput}
            onChange={handleChangeValue}
            textareaHeight={textareaHeight}
          ></TDTaskDescription>
        </TDTaskDescriptionContainer>
      ) : (
        ''
      )}
    </div>
  )
}
