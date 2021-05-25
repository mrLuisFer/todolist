import styled from 'styled-components'
import { buttonStyle } from 'styles/utils/buttonStyled'
import { paddingLayout } from 'styles/utils/paddingLayout'

export const LoginTopContentStyled = styled.div`
  height: 45vh;
  width: 100%;
  display: block;
  position: relative;
  background: var(--dark-purple);
  margin-bottom: 3rem;

  ${paddingLayout()}

  &::after {
    content: ' ';
    position: absolute;
    bottom: -2rem;
    height: 3rem;
    background: var(--dark-purple);
    width: 100%;
    border-radius: 1% 1% 70%;
    left: 0;
  }
`

export const LoginTopTitle = styled.h1`
  color: var(--white);
  letter-spacing: 1px;
  line-height: 1.5;
`

export const LoginSecreteMsg = styled.div`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--light-blue);
`

export const LoginSecreteMsgButton = styled.button`
  ${buttonStyle()}
`
