import styled, { css } from 'styled-components/macro'

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
