import styled from 'styled-components/macro'

export const File = styled.div`
  display: flex;
  margin: 24px 0px 24px 24px;
`
export const FileName = styled.input`
  background: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: text;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.8rem;
  letter-spacing: -0.02em;
  margin-left: 6px;
  width: 100%;
  :focus {
    outline: none;
  }
`
