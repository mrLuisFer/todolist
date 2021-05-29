import styled from 'styled-components'
import { userNoSelect } from 'styles/utils/userNoSelect'

export const NavInfoContainer = styled.nav`
  display: block;
  position: absolute;
  left: -1000%;
  background: var(--bg-dark-blue);
  border-radius: var(--sm-radius);
  padding: 0;
  width: 90px;
`

export const NavInfoListElement = styled.li`
  display: block;
  padding: 0.9rem;
  background: var(--bg-dark-blue);
  transition: var(--transition);
  color: var(--text-white);
  border-radius: var(--sm-radius);
  font-weight: 400;
  cursor: pointer;

  ${userNoSelect()}

  &:hover {
    filter: brightness(1.5);
  }
`
