import styled, { css } from 'styled-components'

export const LTTodoContainer = styled.div`
  width: 100%;
  background: var(--light-blue);
  margin-bottom: 2rem;
  padding: 1rem 0.5rem;
  border-radius: var(--sm-radius);
  transition: var(--transition);

  ${(props) =>
    props.isChecked
      ? css`
          border: 1px solid var(--blue);
          opacity: 0.6;
        `
      : css`
          border: 0.5px solid var(--shadow-color);
          opacity: 1;
        `}
`

export const TodoLabel = styled.label`
  text-decoration: ${(props) => (props.isChecked ? 'line-through' : 'none')};
  font-weight: 500;
  text-transform: capitalize;
`

export const LTTodoDescription = styled.p`
  padding: 1rem 0;
  font-size: 0.9rem;
  opacity: 0.9;
  letter-spacing: 0.2px;
`

export const TodoFlex = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
`
