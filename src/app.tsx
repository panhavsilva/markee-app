import { useRef, useState, useEffect } from 'react'
import { File } from 'resources/files/types'
import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'
import { Content } from 'content'

export function App () {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFile] = useState<File[]>([])
  const [activeFile, setActiveFile] = useState<File | null>(null)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    if (files.length > 0) {
      const fileActive = files.filter(file => file.active === true)[0]
      setActiveFile(fileActive)
    }

    function updateStatus () {
      const file = files.find(file => file.active === true)

      if (!file || file.status !== 'editing') {
        return
      }

      timer = setTimeout(() => {
        setFile(files => files.map(file => {
          if (file.active) {
            return {
              ...file,
              status: 'saving',
            }
          }

          return file
        }))

        setTimeout(() => {
          setFile(files => files.map(file => {
            if (file.active) {
              return {
                ...file,
                status: 'saved',
              }
            }

            return file
          }))
        }, 300)
      }, 300)
    }

    updateStatus()

    return () => clearTimeout(timer)
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
