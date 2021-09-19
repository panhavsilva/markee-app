import { v4 } from 'uuid'
import { useState, useRef } from 'react'
import styled from 'styled-components/macro'
import { File } from 'resources/files/types'
import { Sidebar } from 'sidebar'
import { Content } from 'content'

type FileArray = File[]
export function App () {
  const [files, setFile] = useState<FileArray>([])
  const inputRef = useRef<HTMLInputElement>(null)

  inputRef.current?.focus()
  const handleClick = () => {
    const newFile: FileArray = [{
      id: v4(),
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    }]

    setFile(files => files
      .map(file => ({
        ...file,
        active: false,
      }))
      .concat(newFile))
  }

  return (
    <Container>
      <Sidebar fileList={files} handleClick={handleClick} />
      <Content inputRef={inputRef} />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 332px 1fr;
  min-height: 100vh;
`
