import React, { useEffect, useState } from 'react'

import { ErrorMsgStyled } from './ErrorMsg.styles'

export default function ErrorMsg({ children }) {
  const [clearErrorMsg, setclearErrorMsg] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setclearErrorMsg(true)
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      {clearErrorMsg ? (
        ''
      ) : (
        <ErrorMsgStyled>
          <i className='fas fa-exclamation'></i>
          <p>{children}</p>
        </ErrorMsgStyled>
      )}
    </>
  )
}
