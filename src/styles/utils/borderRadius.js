import { css } from 'styled-components'

export const borderRadius = (value = 'var(--sm-radius)') => css`
  border-radius: ${value};
  -webkit-border-radius: ${value};
  -moz-border-radius: ${value};
`
