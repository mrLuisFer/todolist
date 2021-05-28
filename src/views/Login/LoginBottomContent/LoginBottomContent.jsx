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
    if (loginInputValue.trim().match(/^[a-zA-Z][a-zA-Z\s]*$/)) {
      history.push('/home')
      localStorage.setItem('userName', loginInputValue.trim())
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
    const eventValue = event.target.value
    setLoginInputValue(eventValue)
  }

  const preventSubmitEvent = (e) => {
    e.preventDefault()
  }

  return (
    <LoginBottomContentStyled>
      <LoginTitle className={bounce}>Login 🤗</LoginTitle>
      <LoginContentInput onSubmit={preventSubmitEvent}>
        <LoginFormLabel htmlFor='username-input'>Username:</LoginFormLabel>
        <LoginFormInput
          disabled={isError}
          id='username-input'
          name='username-input'
          onChange={handleChangeInputValue}
          require
          type='text'
          value={loginInputValue}
        />
        {isError ? (
          <ErrorMsg marginSize='2rem 0'>Nombre de usuario invalido</ErrorMsg>
        ) : (
          ''
        )}
        <LoginFormButton onClick={handlePushToHome} type='submit'>
          LOGIN
        </LoginFormButton>
      </LoginContentInput>
    </LoginBottomContentStyled>
  )
}
