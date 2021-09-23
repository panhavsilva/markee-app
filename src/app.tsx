import { useFiles } from 'resources/files/use-files'
import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'
import { Content } from 'content'

export function App () {
  const {
    inputRef,
    files,
    activeFile,
    handleCreateFile,
    handleDeleteFile,
    handleSelectFile,
    handleChangeContent,
    handleChangeTitle,
  } = useFiles()

  return (
    <Container>
      <Sidebar
        files={files}
        handleCreateFile={handleCreateFile}
        handleDeleteFile={handleDeleteFile}
        handleSelectFile={handleSelectFile}
      />
      <Content
        inputRef={inputRef}
        file={activeFile}
        handleChangeContent={handleChangeContent}
        handleChangeTitle={handleChangeTitle}
      />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 332px 1fr;
  min-height: 100vh;
`
