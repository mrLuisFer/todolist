import styled from 'styled-components'
import { paddingLayout } from 'styles/utils/paddingLayout'

export const LoginBottomContent = styled.section`
  ${paddingLayout()}
`

export const LoginTopEmptyContent = styled.div`
  height: 40vh;
  width: 100%;
  display: block;
  position: relative;
  background: var(--dark-purple);
  margin-bottom: 3rem;

  &::after {
    content: ' ';
    position: absolute;
    bottom: -2rem;
    height: 3rem;
    background: var(--dark-purple);
    width: 100%;
    border-radius: 1% 1% 70%;
  }
`

export const LoginTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  line-height: 2rem;
  margin-bottom: 3rem;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`

export const LoginContentInput = styled.form`
  position: relative;
`

export const LoginFormLabel = styled.label`
  display: block;
  position: absolute;
  left: 0;
  bottom: 6.5rem;
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
  border: none;
  outline: none;
  background: var(--purple-blue);
  border-radius: var(--small-radius);
  color: var(--white);
  font-size: 1.2rem;
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 0;
  letter-spacing: 1px;
  margin-top: 3rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`
