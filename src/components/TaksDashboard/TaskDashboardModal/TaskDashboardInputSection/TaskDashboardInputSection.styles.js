import styled from 'styled-components'
import { borderRadius } from 'styles/utils/borderRadius'

export const TDInputContainer = styled.div`
  ${borderRadius()}
  box-shadow: 0.2px 0.5px 2px var(--shadow-color);
  padding: 0.5rem 0.8rem;
  width: 100%;
  height: 45px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    box-shadow: 0.5px 1px 4px var(--shadow-color);
  }
`

export const TDInput = styled.input`
  font-size: 1rem;
  font-weight: 700;
  outline: none;
  width: 100%;
  border: none;
  padding-right: 0.3rem;

  &::placeholder {
    color: var(--text-black);
    opacity: 0.7;
  }
`

export const TDInputInfo = styled.i`
  color: var(--dark-purple);
  transition: var(--transition);
  cursor: pointer;
  font-size: 1.1rem;

  &:hover {
    color: var(--purple-blue);
  }
`
