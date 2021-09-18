import styled, { css } from 'styled-components/macro'

export const Textarea = styled.textarea`${({ theme }) => css`
  background: ${theme.colors.white};
  border: none;
  border-right: 2px solid rgba(30, 41, 59, 0.12);
  color: rgba(30, 41, 59, 0.86);
  cursor: text;
  display: block;
  font-family: 'Inconsolata', monospace;
  font-size: 1.8rem;
  font-weight: 500;
  height: 80vh;
  line-height: 19px;
  padding: 0px 30px;
  resize: none;
  width: 100%;

  :focus {
    outline: none;
  }
`}`
