import React from 'react'
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
  return (
    <LoginBottomContentStyled>
      <LoginTitle className={bounce}>Login 🤗</LoginTitle>
      <LoginContentInput>
        <LoginFormInput id='username-input' type='text' required />
        <LoginFormLabel htmlFor='username-input'>Username</LoginFormLabel>
        <LoginFormButton type='button'>LOGIN</LoginFormButton>
      </LoginContentInput>
    </LoginBottomContentStyled>
  )
}
