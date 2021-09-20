import { v4 } from 'uuid'
import { useEffect, useState, RefObject, MouseEvent } from 'react'
import { File } from 'resources/files/types'
import plus from 'ui/icons/plus-symbol.svg'
import logo from './logo.svg'
import { FileActive } from './file-active'
import { FileInative } from './file-inative'
import {
  Aside, Logo, Title, ButtonAddFile, PlusIcon, List, Files, FileHover,
} from './sidebar-styled'

type SidebarProps = {
  inputRef: RefObject<HTMLInputElement>
  titleFile: string
}
export function Sidebar ({ inputRef, titleFile }: SidebarProps) {
  const [files, setFile] = useState<File[]>([])
  useEffect(() => {

  }, [files])

  const handleCreateFile = () => {
    inputRef.current?.focus()

    const newFile: File[] = [{
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
  const handleSelectFile = (event: MouseEvent, id: string) => {
    event.preventDefault()
    setFile(files => files
      .map(file => (file.id === id
        ? { ...file, active: true, status: 'editing' }
        : { ...file, active: false })))
  }

  return (
    <Aside>
      <Logo><img src={logo} alt='Logo' /></Logo>
      <Title>Arquivos</Title>
      <ButtonAddFile onClick={handleCreateFile}>
        <PlusIcon src={plus} alt='Plus icon' />{' '}Adicionar arquivo
      </ButtonAddFile>
      <List>
        {files.map((file) => (
          file.active === true
            ? (
              <Files key={file.id}>
                <FileActive file={{ ...file, name: titleFile }} />
              </Files>
              )
            : (
              <FileHover key={file.id} onClick={(event) => handleSelectFile(event, file.id)}>
                <FileInative file={file} />
              </FileHover>
              )
        ))}
      </List>
    </Aside>
  )
}
