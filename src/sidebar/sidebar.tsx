import styled, { css } from 'styled-components/macro'

function Sidebar () {
  return (
    <Aside>App</Aside>
  )
}

const Aside = styled.aside`${({ theme }) => css`
  background: ${theme.colors.black};
`}`

export { Sidebar }
