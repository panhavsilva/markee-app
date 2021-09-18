import { File } from 'resources/files/types'
import plus from 'ui/icons/plus-symbol.svg'
import logo from './logo.svg'
import { FileActive } from './file-active'
import { FileInative } from './file-inative'
import {
  Aside, Logo, Title, ButtonAddFile, PlusIcon, List, Files, FileHover,
} from './sidebar-styled'

type FileList = { fileList: File[] }
function Sidebar ({ fileList }: FileList) {
  return (
    <Aside>
      <Logo><img src={logo} alt='Logo' /></Logo>
      <Title>Arquivos</Title>
      <ButtonAddFile>
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

export { Sidebar }
