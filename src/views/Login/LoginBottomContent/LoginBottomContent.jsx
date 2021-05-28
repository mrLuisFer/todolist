import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { bounce } from 'styles/animateCss/classNames'
import ErrorMsg from 'components/ErrorMsg/ErrorMsg'

import {
  LoginBottomContentStyled,
  LoginContentInput,
  LoginFormButton,
  LoginFormInput,
  LoginFormLabel,
  LoginTitle,
} from './LoginBottomContent.styles'

export default function LoginBottomContent() {
  const [loginInputValue, setLoginInputValue] = useState('')
  const [isError, setIsError] = useState(false)
  const history = useHistory()

  const handlePushToHome = () => {
    if (loginInputValue.match(/^[a-zA-Z]+$/)) {
      history.push('/home')
      localStorage.setItem('userName', loginInputValue)
    } else {
      setIsError(true)

      setTimeout(() => {
        setIsError(false)
      }, 2000)
    }
  }

  const checkUserName = () => {
    const localstoreItem = localStorage.getItem('userName')
    console.log(localstoreItem)
  }

  useEffect(() => {
    checkUserName()
    setIsError(false)
  }, [])

  const handleChangeInputValue = (event) => {
    setLoginInputValue(event.target.value)
  }

  const preventSubmitEvent = (e) => {
    e.preventDefault()
  }

  return (
    <LoginBottomContentStyled>
      <LoginTitle className={bounce}>Login 🤗</LoginTitle>
      <LoginContentInput onSubmit={preventSubmitEvent}>
        <LoginFormLabel htmlFor='username-input'>Username</LoginFormLabel>
        <LoginFormInput
          id='username-input'
          type='text'
          require
          value={loginInputValue}
          onChange={handleChangeInputValue}
          name='username-input'
          disabled={isError}
        />
        {isError ? <ErrorMsg marginSize='2rem 0'>Error</ErrorMsg> : ''}
        <LoginFormButton onClick={handlePushToHome} type='submit'>
          LOGIN
        </LoginFormButton>
      </LoginContentInput>
    </LoginBottomContentStyled>
  )
}
