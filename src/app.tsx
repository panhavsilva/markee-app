import { useRef, useState, useEffect } from 'react'
import { File } from 'resources/files/types'
import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'
import { Content } from 'content'

export function App () {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFile] = useState<File[]>([])
  const [activeFile, setActiveFile] = useState<File>({
    id: '1',
    name: 'Sem título',
    content: '',
    status: 'saved',
    active: true,
  })

  useEffect(() => {
    if (files.length > 0) {
      const fileActive = files.filter(file => file.active === true)[0]
      setActiveFile(fileActive)
    }
  }, [files])

  return (
    <Container>
      <Sidebar
        inputRef={inputRef}
        files={files}
        setFile={setFile}
      />
      <Content
        inputRef={inputRef}
        setFile={setFile}
        file={activeFile}
      />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 332px 1fr;
  min-height: 100vh;
`
