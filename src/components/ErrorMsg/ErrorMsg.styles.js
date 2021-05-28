import styled from 'styled-components'

export const ErrorMsgStyled = styled.div`
  background: var(--error-color);
  padding: 0.7rem 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 1rem;
  border-radius: var(--sm-radius);
  border: 3px solid #f55c47;
  margin: ${(props) => props.marginSize || '0'};
`
