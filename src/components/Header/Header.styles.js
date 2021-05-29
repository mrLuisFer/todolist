import styled from 'styled-components'
import { paddingLayout } from 'styles/utils/paddingLayout'

export const NavContainer = styled.header`
  ${paddingLayout()}

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 0.5rem;
`

export const NavTitle = styled.h1`
  letter-spacing: 1px;
  font-weight: 600;
  color: var(--title-color);
  font-size: 1.4rem;
`

export const NavTitleSpan = styled.span`
  text-transform: capitalize;
  color: var(--text-blue);
`

export const NavIcon = styled.i`
  font-size: 1.4rem;
  color: var(--info-color);
  cursor: pointer;
`
