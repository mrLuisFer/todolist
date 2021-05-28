import styled from 'styled-components'
import { buttonStyle } from 'styles/utils/buttonStyled'
import { paddingLayout } from 'styles/utils/paddingLayout'

export const LoginBottomContentStyled = styled.section`
  ${paddingLayout()}
`
export const LoginTitle = styled.h1`
  display: inline-block;
  font-size: 2rem;
  font-weight: 600;
  line-height: 2rem;
  margin-bottom: 1.5rem;
`

export const LoginContentInput = styled.form`
  position: relative;
`

export const LoginFormLabel = styled.label`
  display: block;
  font-size: 1rem;
  left: 0;
  margin-left: 0.2rem;
  opacity: 0.8;
  pointer-events: none;
  transition: var(--transition);
`

export const LoginFormInput = styled.input`
  background: transparent;
  border-bottom: 1px solid var(--light-blue);
  border: none;
  display: block;
  font-size: 1rem;
  height: 2rem;
  outline: none;
  padding: 0.3rem 0.6rem;
  transition: var(--transition);
  width: 100%;

  &:hover {
    border-radius: 3px;
  }

  &:focus {
    border-bottom: 0.5px solid var(--purple-blue);
  }

  &:focus ~ ${LoginFormLabel}, &:valid ~ ${LoginFormLabel} {
    transform: translateY(-30px);
    font-size: 1.1rem;
    margin-left: 0;
    opacity: 1;
  }
`

export const LoginFormButton = styled.button`
  ${buttonStyle()}

  background: var(--purple-blue);
  color: var(--white);
  font-size: 1.2rem;
  height: 50px;
  letter-spacing: 1px;
  margin-top: 3rem;
  text-align: center;
  transition: var(--transition);
  width: 100%;

  &:hover {
    filter: brightness(1.3);
  }
`
