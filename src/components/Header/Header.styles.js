import styled from 'styled-components'
import { paddingLayout } from 'styles/utils/paddingLayout'
import { userNoSelect } from 'styles/utils/userNoSelect'

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
  font-size: 1.5rem;
`

export const HTitleSpan = styled.span`
  text-transform: capitalize;
  color: var(--text-blue);
`

export const HIconContainer = styled.div`
  position: relative;

  ${userNoSelect()}
`

export const HIcon = styled.i`
  font-size: 1.8rem;
  color: var(--info-color);
  cursor: pointer;
`
