import styled from 'styled-components'
import { buttonStyle } from 'styles/utils/buttonStyled'
import { paddingLayout } from 'styles/utils/paddingLayout'

export const TasksDashboardContainer = styled.div`
  ${paddingLayout()}
`

export const TasksDashboardButton = styled.button`
  ${buttonStyle()}

  background: var(--green);
  padding: 0.7rem 1rem;
  font-size: 1.2rem;
  width: 150px;
  height: 50px;
  font-weight: 600;
  color: var(--text-white);
  box-shadow: 2px 2px 5px var(--shadow-color);

  i {
    margin-right: 0.5rem;
  }
`
