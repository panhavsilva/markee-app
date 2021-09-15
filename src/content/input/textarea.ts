import styled from 'styled-components/macro'

export const Textarea = styled.textarea`
  background: ${({ theme }) => theme.colors.white};
  border: none;
  border-right: 2px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.black};
  cursor: text;
  display: block;
  font-family: 'Inconsolata', monospace;
  font-size: 1.8rem;
  height: 80vh;
  line-height: 19px;
  padding: 20px 30px;
  resize: none;
  width: 100%;

  :focus {
    outline: none;
  }
`
