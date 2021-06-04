import styled from 'styled-components'
import { paddingLayout } from 'styles/utils/paddingLayout'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  padding: 2rem;
`

export const ModalContent = styled.div`
  background: var(--white);
  position: relative;
  display: block;
  ${paddingLayout()}
`

export const ModalCloseBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
