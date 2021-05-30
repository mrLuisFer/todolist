import styled, { keyframes } from 'styled-components'
import { userNoSelect } from 'styles/utils/userNoSelect'
import { Link } from 'react-router-dom'

export const NavInfoContainer = styled.nav`
  background: var(--bg-dark-blue);
  border-radius: var(--sm-radius);
  display: block;
  left: -25vw;
  padding: 0;
  position: absolute;
  width: 100%;
  width: -moz-available; /* WebKit-based browsers will ignore this. */
  width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
  width: stretch;
`

const fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const NavInfoListElement = styled.li`
  align-items: center;
  background: var(--bg-dark-blue);
  border-radius: var(--sm-radius);
  color: var(--text-white);
  cursor: pointer;
  display: flex;
  font-weight: 400;
  justify-content: space-between;
  padding: 0.8rem 0.5rem;
  transition: var(--transition);

  animation: ${fade} 0.2s ease;

  ${userNoSelect()}

  &:hover {
    filter: brightness(1.5);
  }
`

export const NavInfoListElementLink = styled(Link)`
  text-decoration: none;
  color: var(--text-white);
`
