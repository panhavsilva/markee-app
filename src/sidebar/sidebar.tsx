import { RefObject, MouseEvent, Dispatch, SetStateAction } from 'react'
import { v4 } from 'uuid'
import { File } from 'resources/files/types'
import plus from 'ui/icons/plus-symbol.svg'
import fileWhiteIcon from 'ui/icons/file-white-icon.svg'
import fileBlueIcon from 'ui/icons/file-blue-icon.svg'
import logo from './logo.svg'
import { StatusIconEditing } from './status-icon'
import * as S from './sidebar-styled'

type SidebarProps = {
  inputRef: RefObject<HTMLInputElement>
  files: File[]
  setFile: Dispatch<SetStateAction<File[]>>
}
export function Sidebar ({ inputRef, files, setFile }: SidebarProps) {
  const handleCreateFile = () => {
    inputRef.current?.focus()

    const newFile: File[] = [{
      id: v4(),
      name: 'Sem Título',
      content: '',
      active: true,
      status: 'saved',
    }]

    setFile(files => files
      .map(file => ({
        ...file,
        active: false,
      }))
      .filter(file => file.id !== '1')
      .concat(newFile))
  }
  const handleSelectFile = (event: MouseEvent, fileSelected: File) => {
    event.preventDefault()
    setFile(files => files
      .map(file => (file.id === fileSelected.id
        ? { ...file, active: true, status: 'editing' }
        : { ...file, active: false })))
  }
  const handleDeleteFile = (event: MouseEvent, id: string) => {
    event.preventDefault()
    setFile(files => files.filter(file => file.id !== id))
  }

  return (
    <S.Aside>
      <S.Logo><img src={logo} alt='Logo' /></S.Logo>
      <S.Title>Arquivos</S.Title>
      <S.ButtonAddFile onClick={handleCreateFile}>
        <S.PlusIcon src={plus} alt='Plus icon' />{' '}Adicionar arquivo
      </S.ButtonAddFile>
      <S.List>
        {files.map((file) => (
          file.active === true
            ? (
              <S.Files key={file.id}>
                <S.FileLinkActive href={`/file/${file.id}`}>
                  <S.FileIcon src={fileBlueIcon} alt='File icon' />
                  {file.name}
                  <StatusIconEditing status={file.status} />
                </S.FileLinkActive>
              </S.Files>
              )
            : (
              <S.FileHover key={file.id}>
                <S.FileLink href={`/file/${file.id}`} onClick={(event) => handleSelectFile(event, file)}>
                  <S.FileIcon src={fileWhiteIcon} alt='File icon' />
                  {file.name}
                </S.FileLink>
                <S.ButtonDelete onClick={(event) => handleDeleteFile(event, file.id)} />
              </S.FileHover>
              )
        ))}
      </S.List>
    </S.Aside>
  )
}
