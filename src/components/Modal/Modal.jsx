import React from 'react'

import ReactDOM from 'react-dom'
import { ModalContainer, ModalCloseBtnContainer, ModalContent } from './Modal.styles'

/**
 * @param {JSX.Element | React.FC} component
 * @param {string} elementId
 * @param {Function} closeFunc
 * @returns JSX.Element
 */
export default function Modal({ jsxComponent, elementId = '', closeFunc }) {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalContainer>
          <ModalContent>
            <ModalCloseBtnContainer>
              <button onClick={closeFunc}>X</button>
            </ModalCloseBtnContainer>
            {jsxComponent}
          </ModalContent>
        </ModalContainer>,

        document.getElementById(`${elementId}`)
      )}
    </>
  )
}
