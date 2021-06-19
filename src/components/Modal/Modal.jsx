import React from 'react'
import ReactDOM from 'react-dom'
import { fadeIn, faster } from 'styles/animateCss/classNames'

import {
  ModalContainer,
  ModalCloseBtnContainer,
  ModalContent,
  ModalCloseBtn,
} from './Modal.styles'

/**
 *
 * @param {JSX.Element | React.FC} jsxComponent
 * @param {string} elementId
 * @param {Function} closeFunc
 * @returns JSX.Element
 */
export default function Modal({ jsxComponent, elementId = '', closeFunc }) {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalContainer>
          <ModalContent className={`${fadeIn} ${faster}`}>
            <ModalCloseBtnContainer>
              <ModalCloseBtn onClick={closeFunc}>
                <i className="fas fa-times" title="Cancel" />
              </ModalCloseBtn>
            </ModalCloseBtnContainer>
            {jsxComponent}
          </ModalContent>
        </ModalContainer>,

        document.getElementById(`${elementId}`)
      )}
    </>
  )
}
