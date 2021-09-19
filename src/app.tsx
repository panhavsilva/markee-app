import { useRef } from 'react'
import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'
import { Content } from 'content'

export function App () {
  const inputRef = useRef<HTMLInputElement>(null)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  return (
    <Container>
      <Sidebar inputRef={inputRef} textAreaRef={textAreaRef} />
      <Content inputRef={inputRef} textAreaRef={textAreaRef} />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 332px 1fr;
  min-height: 100vh;
`
