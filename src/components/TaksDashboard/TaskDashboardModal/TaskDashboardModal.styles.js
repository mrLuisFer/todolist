import styled from 'styled-components'
import { paddingLayout } from 'styles/utils/paddingLayout'

export const TasksDashboardModalContainer = styled.section`
  ${paddingLayout()}

  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--light-white);
`

export const TDFullWidth = styled.div`
  width: 100%;
`
