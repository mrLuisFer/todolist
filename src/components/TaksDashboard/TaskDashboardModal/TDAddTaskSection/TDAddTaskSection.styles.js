import styled from 'styled-components'
import { borderRadius } from 'styles/utils/borderRadius'
import { buttonStyle } from 'styles/utils/buttonStyled'

export const TDAddTaskSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TDAddTaskColorsContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.8rem;
`

export const TDAddTaskColor = styled.div`
  height: 30px;
  width: 30px;
  background: #000;
  cursor: pointer;
  ${borderRadius('100%')}
`

export const TDAddTaskButton = styled.button`
  ${buttonStyle()}

  background: var(--purple-blue);
  padding: 0.8rem;
  font-size: 1rem;
  color: var(--text-white);

  i {
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
`
