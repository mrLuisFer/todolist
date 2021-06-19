import styled from 'styled-components'
import { TodoLabel } from './Todo.styles'

export const TodoInput = styled.input`
  &:not(:checked),
  &:checked {
    position: absolute;
    left: 0;
    opacity: 0.01;
  }

  &:not(:checked) + ${TodoLabel}, &:checked + ${TodoLabel} {
    position: relative;
    padding-left: 2em;
    font-size: 1.05em;
    line-height: 1.7;
    cursor: pointer;
  }

  /* checkbox aspect */
  &:not(:checked) + ${TodoLabel}:before, &:checked + ${TodoLabel}:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 1.2em;
    height: 1.2em;
    border: 1px solid #aaa;
    background: #fff;
    border-radius: 0.2em;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
      0 0 0 rgba(203, 34, 237, 0.2);
    -webkit-transition: all 0.275s;
    transition: all 0.275s;
  }

  /* checked mark aspect */
  &:not(:checked) + ${TodoLabel}:after, &:checked + ${TodoLabel}:after {
    content: '✕';
    position: absolute;
    top: 0.48em;
    left: 0.1em;
    font-size: 1.375em;
    color: var(--blue);
    line-height: 0;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }

  /* checked mark aspect changes */
  &:not(:checked) + ${TodoLabel}:after {
    opacity: 0;
    -webkit-transform: scale(0) rotate(45deg);
    transform: scale(0) rotate(45deg);
  }

  &:checked + ${TodoLabel}:after {
    opacity: 1;
    -webkit-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }

  /* prettier-ignore */
  &:disabled:not(:checked) + ${TodoLabel}:before, &:disabled:checked + ${TodoLabel}:before {
    box-shadow: none;
    border-color: #bbb;
    background-color: #e9e9e9;
  }

  &:disabled:checked + ${TodoLabel}:after {
    color: #777;
  }

  &:disabled + ${TodoLabel} {
    color: #aaa;
  }

  /* prettier-ignore */
  &:checked:focus + ${TodoLabel}:before, &:not(:checked):focus + ${TodoLabel}:before {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
      0 0 0 6px rgb(34 57 237 / 20%);
  }
`
