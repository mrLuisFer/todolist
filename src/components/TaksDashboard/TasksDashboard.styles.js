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
  padding: 0.5rem 0.8rem;
  width: 100%;
  display: block;
  box-shadow: 0.2px 0.5px 2px var(--shadow-color);

  &:hover {
    box-shadow: 0.5px 1px 4px var(--shadow-color);
  }
`

export const TDInput = styled.input`
  border: 0;
  font-size: 1rem;
  outline: none;

  &::placeholder {
    color: var(--text-black);
    opacity: 0.7;
  }
`
