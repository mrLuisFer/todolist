import styled from 'styled-components'
import { borderRadius } from 'styles/utils/borderRadius'
import { userNoSelect } from 'styles/utils/userNoSelect'

export const ErrorMsgStyled = styled.div`
  align-items: center;
  background: var(--error-color);
  border: 3px solid #f55c47;
  color: var(--text-white);
  column-gap: 0.6rem;
  display: flex;
  font-weight: 500;
  justify-content: flex-start;
  margin: ${(props) => props.marginSize || '0'};
  padding: 0.7rem 1rem;
  ${borderRadius()}

  ${userNoSelect()}

  &:hover {
    box-shadow: 0.5px 1.5px 4px var(--shadow-color);
  }
`
