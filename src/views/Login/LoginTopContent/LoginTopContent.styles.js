import styled from 'styled-components'
import { buttonStyle } from 'styles/utils/buttonStyled'
import { paddingLayout } from 'styles/utils/paddingLayout'
import { userNoSelect } from 'styles/utils/userNoSelect'

export const LoginTopContentStyled = styled.div`
  background: var(--dark-purple);
  display: block;
  height: 45vh;
  margin-bottom: 3rem;
  position: relative;
  width: 100%;

  ${paddingLayout()}
  padding-top: 0.5rem;

  &::after {
    background: var(--dark-purple);
    border-radius: 1% 1% 70%;
    bottom: -2rem;
    content: ' ';
    height: 3rem;
    left: 0;
    position: absolute;
    width: 100%;
  }
`

export const LoginTopTitle = styled.h1`
  color: var(--text-white);
  letter-spacing: 1px;
  line-height: 1.5;
  cursor: pointer;

  ${userNoSelect()}
`

export const LoginSecreteMsg = styled.div`
  color: var(--light-blue);
  font-size: 0.9rem;
  margin-top: 0.5rem;
`

export const LoginSecreteMsgButton = styled.button`
  ${buttonStyle()}

  background: var(--bg-dark-blue);
  color: var(--light-blue);
  font-size: 1rem;
  height: 30px;
  margin-top: 1rem;
  width: 130px;
`
