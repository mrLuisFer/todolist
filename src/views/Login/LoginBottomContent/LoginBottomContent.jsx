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
  const history = useHistory()
  const [loginInputValue, setLoginInputValue] = useState('')

  const handlePushToHome = () => {
    history.push('/home')
    if (loginInputValue.length > 4) {
      localStorage.clear()
      localStorage.setItem('userName', loginInputValue)
    }
  }

  const checkUserName = () => {
    const localstoreItem = localStorage.getItem('userName')
    console.log(localstoreItem)
  }

  useEffect(() => {
    checkUserName()
  }, [])

  const handleChangeInputValue = (event) => {
    setLoginInputValue(event.target.value)
  }

  return (
    <LoginBottomContentStyled>
      <LoginTitle className={bounce}>Login 🤗</LoginTitle>
      <LoginContentInput>
        <LoginFormInput
          id='username-input'
          type='text'
          require
          value={loginInputValue}
          onChange={handleChangeInputValue}
          name='username-input'
        />
        <LoginFormLabel htmlFor='username-input'>Username</LoginFormLabel>
        <LoginFormButton onClick={handlePushToHome} type='button'>
          LOGIN
        </LoginFormButton>
      </LoginContentInput>
    </LoginBottomContentStyled>
  )
}
