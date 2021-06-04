import styled from 'styled-components'
import { borderRadius } from 'styles/utils/borderRadius'
import { buttonStyle } from 'styles/utils/buttonStyled'

export const TDTaskDescriptionContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin: 1rem 0;
  padding: 0.5rem;
  ${borderRadius('var(--m-radius)')}
`

export const TDTaskDescription = styled.textarea`
  border: none;
  height: auto;
  outline: none;
  overflow-x: hidden;
  padding: 0.5rem;
  resize: none;
  width: 100%;
  line-height: 1.5;
  letter-spacing: normal;
  border-collapse: collapse;
  font-weight: 400;
  font-family: var(--font-family);
  height: 120px;
`

export const TDOpenDescriptionBtn = styled.button`
  ${buttonStyle()};
  padding: 1.2rem 0.7rem;
  margin: 1rem 0;
  font-size: 1rem;
  font-weight: 400;
  background: var(--grey);
`
