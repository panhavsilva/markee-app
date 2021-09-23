import { MouseEvent } from 'react'
import { File } from 'resources/files/types'
import plus from 'ui/icons/plus-symbol.svg'
import fileWhiteIcon from 'ui/icons/file-white-icon.svg'
import fileBlueIcon from 'ui/icons/file-blue-icon.svg'
import logo from './logo.svg'
import { StatusIconEditing } from './status-icon'
import * as S from './sidebar-styled'

type SidebarProps = {
  files: File[]
  handleCreateFile: () => void
  handleDeleteFile: (event: MouseEvent, id: string) => void
  handleSelectFile: (event: MouseEvent, fileSelected: File) => void
}
export function Sidebar (props: SidebarProps) {
  const { files, handleSelectFile, handleCreateFile, handleDeleteFile } = props

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
                <S.FileLink
                  href={`/file/${file.id}`}
                  onClick={(event) => handleSelectFile(event, file)}
                >
                  <S.FileIcon src={fileWhiteIcon} alt='File icon' />
                  {file.name}
                </S.FileLink>
                <S.ButtonDelete
                  onClick={(event) => handleDeleteFile(event, file.id)}
                />
              </S.FileHover>
              )
        ))}
      </S.List>
    </S.Aside>
  )
}
