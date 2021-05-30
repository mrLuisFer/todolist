import styled from 'styled-components'
import { paddingLayout } from 'styles/utils/paddingLayout'

export const TasksDashboardContainer = styled.section`
  ${paddingLayout()}

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TDInputContainer = styled.div`
  border-radius: var(--sm-radius);
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
  font-weight: 500;
  outline: none;
  width: 100%;

  &::placeholder {
    color: var(--text-black);
    opacity: 0.7;
  }
`

export const TDTaskDescription = styled.textarea`
  border: none;
  height: auto;
  margin: 1rem 0;
  outline: none;
  overflow-x: hidden;
  padding: 0.5rem;
  resize: none;
  width: 100%;
  line-height: 1.5;
  letter-spacing: normal;
`
