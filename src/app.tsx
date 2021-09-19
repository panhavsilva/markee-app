import { useRef, useState } from 'react'
import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'
import { Content } from 'content'

export function App () {
  const inputRef = useRef<HTMLInputElement>(null)
  const [titleFile, setTitleFile] = useState('Sem Título')

  return (
    <Container>
      <Sidebar inputRef={inputRef} titleFile={titleFile} />
      <Content inputRef={inputRef} setTitleFile={setTitleFile} />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 332px 1fr;
  min-height: 100vh;
`
