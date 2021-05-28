import styled from 'styled-components'
import { buttonStyle } from 'styles/utils/buttonStyled'
import { paddingLayout } from 'styles/utils/paddingLayout'

export const LoginBottomContentStyled = styled.section`
  ${paddingLayout()}
`
export const LoginTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  line-height: 2rem;
  margin-bottom: 1.5rem;
  display: inline-block;
`

export const LoginContentInput = styled.form`
  position: relative;
`

export const LoginFormLabel = styled.label`
  display: block;
  left: 0;
  pointer-events: none;
  font-size: 1rem;
  margin-left: 0.2rem;
  opacity: 0.8;
  transition: var(--transition);
`

export const LoginFormInput = styled.input`
  height: 2rem;
  width: 100%;
  padding: 0.3rem 0.6rem;
  outline: none;
  display: block;
  font-size: 1rem;
  background: transparent;
  transition: var(--transition);
  border: none;
  border-bottom: 1px solid var(--light-blue);

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
  width: 100%;
  height: 50px;
  text-align: center;
  letter-spacing: 1px;
  margin-top: 3rem;
  transition: var(--transition);

  &:hover {
    filter: brightness(1.3);
  }
`
