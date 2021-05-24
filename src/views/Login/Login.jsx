import React from 'react'
import {
  LoginBottomContent,
  LoginContentInput,
  LoginFormButton,
  LoginFormInput,
  LoginFormLabel,
  LoginTitle,
  LoginTopEmptyContent,
} from './Login.styles'

export default function Login() {
  return (
    <section>
      <LoginTopEmptyContent></LoginTopEmptyContent>
      <LoginBottomContent>
        <LoginTitle>Login 🤗</LoginTitle>
        <LoginContentInput>
          <div>
            <LoginFormInput id='username-input' type='text' required />
            <LoginFormLabel htmlFor='username-input'>Username</LoginFormLabel>
          </div>
          <LoginFormButton type='button'>LOGIN</LoginFormButton>
        </LoginContentInput>
      </LoginBottomContent>
    </section>
  )
}
