import { css } from 'styled-components'
import { userNoSelect } from './userNoSelect'

export const buttonStyle = (
  cursorStyle = 'pointer',
  radius = 'var(--small-radius)'
) => css`
  border: none;
  outline: none;
  border-radius: ${radius};
  line-height: 0;
  cursor: ${cursorStyle};

  ${userNoSelect()}

  &:active {
    transform: scale(0.96, 0.96);
  }
`
