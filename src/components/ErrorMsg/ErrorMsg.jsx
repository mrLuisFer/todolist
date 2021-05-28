import React from 'react'

import { ErrorMsgStyled } from './ErrorMsg.styles'

export default function ErrorMsg({ children }) {
  return (
    <ErrorMsgStyled>
      <i className='fas fa-exclamation'></i>
      <p>{children}</p>
    </ErrorMsgStyled>
  )
}
