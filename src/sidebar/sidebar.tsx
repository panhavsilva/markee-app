import styled, { css } from 'styled-components/macro'
import logo from 'assets/logo.svg'

function Sidebar () {
  return (
    <Aside>
      <Logo>
        <img src={logo} alt='Logo' />
      </Logo>
      <Files>Arquivos</Files>
      <Button>+ Adicionar arquivo</Button>
    </Aside>
  )
}

const Aside = styled.aside`${({ theme }) => css`
  background: ${theme.colors.black};
  padding: 0 32px;
`}`

const Logo = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  text-align: center;
  padding: 45px 0px 60px 0px;
`
const Files = styled.p`
  background: ${({ theme }) => theme.colors.black};
  color: #FFFFFF;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.6em;
  letter-spacing: -0.02em;
  margin-left: 51px;
  padding: 5px;
  position: absolute;
  top: 122px;
`
const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.black};
  font-family: 'DM Sans', sans-serif;
  font-size: 1.4em;
  height: 34px;
  letter-spacing: -0.02em;
  margin-top: 35px;
  width: 100%;
`

export { Sidebar }
