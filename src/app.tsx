import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'
import { Content } from 'content'

function App () {
  return (
    <Container>
      <Sidebar />
      <Content />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 332px 1fr;
  min-height: 100vh;
`

export { App }
