import React from 'react'

import { ErrorMsgStyled } from './ErrorMsg.styles'

/**
 * @param {string} children
 * @param {string} marginSize
 * @returns JSX.Element
 */
export default function ErrorMsg({ children = 'Error', marginSize = '0' }) {
  return (
    <ErrorMsgStyled marginSize={marginSize}>
      <i className="fas fa-exclamation"></i>
      <p>{children}</p>
    </ErrorMsgStyled>
  )
}
