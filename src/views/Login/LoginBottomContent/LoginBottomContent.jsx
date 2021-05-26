import React from 'react'
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

  const handlePushToHome = () => {
    history.push('/home')
  }

  return (
    <LoginBottomContentStyled>
      <LoginTitle className={bounce}>Login 🤗</LoginTitle>
      <LoginContentInput>
        <LoginFormInput id='username-input' type='text' required />
        <LoginFormLabel htmlFor='username-input'>Username</LoginFormLabel>
        <LoginFormButton onClick={handlePushToHome} type='button'>
          LOGIN
        </LoginFormButton>
      </LoginContentInput>
    </LoginBottomContentStyled>
  )
}
