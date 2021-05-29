import styled from 'styled-components'
import { paddingLayout } from 'styles/utils/paddingLayout'

export const HContainer = styled.header`
  ${paddingLayout()}

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 0.5rem;
`

export const HTitle = styled.h1`
  letter-spacing: 1px;
  font-weight: 600;
  color: var(--title-color);
  font-size: 1.4rem;
`

export const HTitleSpan = styled.span`
  text-transform: capitalize;
  color: var(--text-blue);
`

export const HIcon = styled.i`
  font-size: 1.4rem;
  color: var(--info-color);
  cursor: pointer;
`

export const HIconContainer = styled.div`
  position: relative;
`
