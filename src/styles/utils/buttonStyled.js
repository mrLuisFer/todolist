import { css } from 'styled-components'

export const buttonStyle = (
  cursorStyle = 'pointer',
  radius = 'var(--small-radius)'
) => css`
  border: none;
  outline: none;
  border-radius: ${radius};
  line-height: 0;
  cursor: ${cursorStyle};
`
