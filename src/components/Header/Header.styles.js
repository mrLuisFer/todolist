import styled from 'styled-components'
import { paddingLayout } from 'styles/utils/paddingLayout'

export const NavContainer = styled.div`
  ${paddingLayout()}

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavTitle = styled.h1`
  letter-spacing: 1px;
  font-weight: 600;
`

export const NavIcon = styled.i`
  font-size: 1.5rem;
`
