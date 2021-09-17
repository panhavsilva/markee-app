import styled from 'styled-components/macro'

export const File = styled.div`
  display: flex;
  margin: 24px 0px 24px 24px;
`
export const FileName = styled.input`
  background: ${({ theme }) => theme.colors.white};
  border: none;
  color: ${({ theme }) => theme.colors.black};
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
`
