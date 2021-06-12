import styled from 'styled-components'
import { userNoSelect } from 'styles/utils/userNoSelect'

export const ListTodosStyled = styled.div`
  padding-top: 1.5rem;
`

export const ListTodosTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
  opacity: 0.3;
  transition: var(--transition);

  ${userNoSelect()}

  &:hover {
    opacity: 0.5;
  }
`
