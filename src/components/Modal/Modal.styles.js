import styled from 'styled-components'
import { borderRadius } from 'styles/utils/borderRadius'
import { buttonStyle } from 'styles/utils/buttonStyled'
import { paddingLayout } from 'styles/utils/paddingLayout'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  padding: 0 1rem;
  height: 100vh;

  padding-top: 6rem;
`

export const ModalContent = styled.div`
  background: var(--white);
  position: relative;
  display: block;

  ${paddingLayout('1rem', '0.5rem', '2rem', '0.5rem')}

  ${borderRadius()}
`

export const ModalCloseBtnContainer = styled.div`
  ${paddingLayout('0')};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const ModalCloseBtn = styled.button`
  ${buttonStyle()}

  padding: 0.5rem 0.8rem;
  background: var(--error-color);
  color: var(--white);
  font-size: 1.2rem;
`
