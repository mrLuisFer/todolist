import styled, { keyframes } from 'styled-components'
import { userNoSelect } from 'styles/utils/userNoSelect'
import { Link } from 'react-router-dom'
import { borderRadius } from 'styles/utils/borderRadius'

export const NavInfoContainer = styled.nav`
  background: var(--bg-dark-blue);
  display: block;
  left: -25vw;
  padding: 0;
  position: absolute;
  width: 100%;
  width: -moz-available; /* WebKit-based browsers will ignore this. */
  width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
  width: max-content;

  ${borderRadius()}
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
  color: var(--text-white);
  cursor: pointer;
  display: flex;
  font-weight: 400;
  justify-content: space-between;
  padding: 0.8rem 0.5rem;
  transition: var(--transition);
  min-width: 90px;

  ${borderRadius()}

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
