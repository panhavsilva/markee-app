import styled, { css } from 'styled-components/macro'
import { Input } from './input'
import { Output } from './output'

function Content () {
  return (
    <Main>
      <Input />
      <Output />
    </Main>
  )
}

const Main = styled.main`${({ theme }) => css`
  background: ${theme.colors.white};
  display: grid;
  grid-template-columns: 1fr 1fr;
`}`

export { Content }
