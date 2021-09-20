import { useRef, useState, useEffect } from 'react'
import { File } from 'resources/files/types'
import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'
import { Content } from 'content'

export function App () {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFile] = useState<File[]>([])
  console.log('antes: ', files)
  useEffect(() => {
    console.log('useEffetc: ', files)
  }, [files])

  return (
    <Container>
      <Sidebar inputRef={inputRef} files={files} setFile={setFile} />
      <Content inputRef={inputRef} />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 332px 1fr;
  min-height: 100vh;
`
