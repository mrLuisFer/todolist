import { css } from 'styled-components'

/**
 *
 * @param {string} paddingTop
 * @param {string} paddingRight
 * @param {string} paddingBottom
 * @param {string} paddingLeft
 * @returns JSX.Element
 */
export const paddingLayout = (
  paddingTop = '2rem',
  paddingRight = '1rem',
  paddingBottom = '0',
  paddingLeft = '1rem'
) => css`
  padding-top: ${paddingTop};
  padding-right: ${paddingRight};
  padding-bottom: ${paddingBottom};
  padding-left: ${paddingLeft};
`
