import styled, { css } from 'styled-components/macro'

export const Main = styled.main`${({ theme }) => css`
  background: ${theme.colors.white};
  display: grid;
  grid-template-areas: "head head" "textarea output";
  grid-template-rows: 89px 1fr;
`}`

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
  grid-area: textarea;
  height: 80vh;
  line-height: 19px;
  padding: 0px 30px;
  resize: none;
  width: 100%;

  :focus {
    outline: none;
  }
`}`

export const Input = styled.div`
  align-items: center;
  display: flex;
  grid-area: head;
  height: 100%;
  padding-left: 28px;
`
export const FileNameIcon = styled.img`
  height: 24px;
  width: 24px;
`

export const FileName = styled.input`${({ theme }) => css`
  background: ${theme.colors.white};
  border: none;
  color: ${theme.colors.black};
  cursor: text;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 23px;
  margin-left: 6px;
  width: 100%;
  :focus {
    outline: none;
  }
`}`
