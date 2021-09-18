import styled, { css } from 'styled-components/macro'

export const File = styled.div`
  display: flex;
  margin: 20px 0px 20px 20px;
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
