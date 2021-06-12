import styled, { css } from 'styled-components'

export const LTTodoContainer = styled.div`
  width: 100%;
  background: var(--grey);
  margin-bottom: 2rem;
  padding: 1rem 0.5rem;
  border-radius: var(--sm-radius);
  transition: var(--transition);

  ${(props) =>
    props.isChecked
      ? css`
          border: 1px solid var(--green);
          opacity: 0.6;
        `
      : css`
          border: 0.5px solid var(--shadow-color);
          opacity: 1;
        `}
`

export const LTTodoTitle = styled.h3`
  text-decoration: ${(props) => (props.isChecked ? 'line-through' : 'none')};
`

export const LTTodoDescription = styled.p``
