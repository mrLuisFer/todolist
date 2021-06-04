import { css } from 'styled-components'
import { userNoSelect } from './userNoSelect'

export const buttonStyle = (cursorStyle = 'pointer', radius = 'var(--sm-radius)') => css`
  border: none;
  outline: none;
  border-radius: ${radius};
  line-height: 0;
  cursor: ${cursorStyle};
  transition: var(--transition);

  ${userNoSelect()}

  &:active {
    transform: scale(0.96, 0.96);
  }

  &:hover {
    filter: brightness(1.07);
  }
`
