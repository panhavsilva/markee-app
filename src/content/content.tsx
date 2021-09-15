import styled, { css } from 'styled-components/macro'

function Content () {
  return (
    <Main>
      <div>div1</div>
      <div>div2</div>
    </Main>
  )
}

const Main = styled.main`${({ theme }) => css`
  background: ${theme.colors.white};
  display: grid;
  grid-template-columns: 1fr 1fr;
`}`

export { Content }
