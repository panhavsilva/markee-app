import styled, { css } from 'styled-components/macro'

export const Aside = styled.aside`${({ theme }) => css`
  background: ${theme.colors.black};
  padding: 0 32px;
`}`

export const Logo = styled.div`${({ theme }) => css`
  border-bottom: 2px solid ${theme.colors.primary};
  text-align: center;
  padding: 45px 0px 60px 0px;
`}`

export const Title = styled.p`${({ theme }) => css`
  background: ${theme.colors.black};
  color: #FFFFFF;
  font-size: 1.6rem;
  letter-spacing: -0.02em;
  margin-left: 13.5px;
  padding: 5px;
  position: absolute;
  top: 122px;
  font-weight: 500;
`}`

export const ButtonAddFile = styled.button`${({ theme }) => css`
  align-items: center;
  background: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  border-radius: 4px;
  color: ${theme.colors.black};
  cursor: pointer;
  display: flex;
  font-size: 1.35522rem;
  font-weight: 400;
  height: 34px;
  justify-content: center;
  letter-spacing: -0.02em;
  line-height: 18px;
  margin-top: 35px;
  width: 100%;
`}`

export const PlusIcon = styled.img`
  margin-right: 12px;
`

export const List = styled.ul`${({ theme }) => css`
  background: ${theme.colors.black};
  color: ${theme.colors.gray};
  margin-top: 32px;
  padding: 0;
  width: 100%;
`}`

export const File = styled.li`${({ theme }) => css`
  align-items: center;
  align-content: center;
  background: ${theme.colors.lightBlack};
  border: none;
  border-radius: 6px;
  display: flex;
  font-size: 1.6rem;
  height: 37px;
  margin-bottom: 6px;
  list-style: none;
  padding: 0px 10px;
  width: 100%;
`}`

export const FileHover = styled(File)`${({ theme }) => css`
  background: ${theme.colors.black};

    :hover{
      background: ${({ theme }) => theme.colors.lightBlack};

      a {
        color: #FFF;
      }

      button{
        opacity: 1;
      }
    }
`}`
