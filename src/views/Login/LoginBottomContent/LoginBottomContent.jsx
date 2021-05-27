import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { bounce } from 'styles/animateCss/classNames'
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
        <LoginFormInput
          id='username-input'
          type='text'
          require
          value={loginInputValue}
          onChange={handleChangeInputValue}
          name='username-input'
        />
        <LoginFormLabel htmlFor='username-input'>Username</LoginFormLabel>
        {isError ? <p>Error</p> : ''}
        <LoginFormButton onClick={handlePushToHome} type='submit'>
          LOGIN
        </LoginFormButton>
      </LoginContentInput>
    </LoginBottomContentStyled>
  )
}
