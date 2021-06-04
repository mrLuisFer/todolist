import styled from 'styled-components'
import { borderRadius } from 'styles/utils/borderRadius'
import { paddingLayout } from 'styles/utils/paddingLayout'

export const TasksDashboardModalContainer = styled.section`
  ${paddingLayout()}

  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--light-white);
`

export const TDFullWidth = styled.div`
  width: 100%;
`

export const TDInputContainer = styled.div`
  ${borderRadius()}
  box-shadow: 0.2px 0.5px 2px var(--shadow-color);
  display: block;
  padding: 0.5rem 0.8rem;
  width: 100%;

  &:hover {
    box-shadow: 0.5px 1px 4px var(--shadow-color);
  }
`

export const TDInput = styled.input`
  border: 0;
  font-size: 1rem;
  font-weight: 700;
  outline: none;
  width: 100%;

  &::placeholder {
    color: var(--text-black);
    opacity: 0.7;
  }
`

export const TDTaskDescriptionContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.8);
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
`
