import styled, { css } from 'styled-components'
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
  padding: 0.5rem 0;
  resize: none;
  width: 100%;
  line-height: 1.5;
  letter-spacing: normal;
  border-collapse: collapse;
  font-weight: 400;
  font-family: var(--font-family);
  height: ${(props) => `${props.textareaHeight}px` || '80px'};
  font-size: 1rem;

  ${(props) =>
    props.textareaHeight <= 80
      ? css`
          overflow: hidden;
        `
      : ''}
`

const commonDescriptionBtn = () => css`
  ${buttonStyle()};
  font-weight: 400;
  font-size: 1rem;
`

export const TDOpenDescriptionBtn = styled.button`
  ${commonDescriptionBtn()};
  padding: 1.2rem 0.7rem;
  margin: 1rem 0;
  background: var(--grey);
  text-transform: capitalize;
`

export const TDCloseDescriptionBtn = styled.button`
  ${commonDescriptionBtn()};
  padding: 0.3rem 0.5rem;
  color: var(--important-color);
`
