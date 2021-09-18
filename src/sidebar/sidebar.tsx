import { v4 } from 'uuid'
import { Dispatch } from 'react'
import { File } from 'resources/files/types'
import plus from 'ui/icons/plus-symbol.svg'
import logo from './logo.svg'
import { FileActive } from './file-active'
import { FileInative } from './file-inative'
import {
  Aside, Logo, Title, ButtonAddFile, PlusIcon, List, Files, FileHover,
} from './sidebar-styled'

type FileArray = File[]
type SidebarProps = { fileList: File[], setFile: Dispatch<FileArray> }
export function Sidebar ({ fileList, setFile }: SidebarProps) {
  const handleClick = () => {
    const newFile: FileArray = [{
      id: v4(),
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    }]

    return setFile(newFile)
  }

  return (
    <Aside>
      <Logo><img src={logo} alt='Logo' /></Logo>
      <Title>Arquivos</Title>
      <ButtonAddFile onClick={handleClick}>
        <PlusIcon src={plus} alt='Plus icon' />{' '}Adicionar arquivo
      </ButtonAddFile>
      <List>
        {fileList.map((file) => (
          file.active === true
            ? <Files key={file.id}><FileActive file={file} /></Files>
            : <FileHover key={file.id}><FileInative file={file} /></FileHover>
        ))}
      </List>
    </Aside>
  )
}
