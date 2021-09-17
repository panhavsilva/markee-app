import { FileList } from 'types/types'
import {
  Aside, Logo, Title, ButtonAddFile, PlusIcon, List, File, FileHover,
} from './sidebar-styled'
import { FileActive } from './file-active'
import { FileInative } from './file-inative'

import logo from 'assets/logo.svg'
import plus from 'assets/plus-symbol.svg'

function Sidebar ({ fileList }: FileList) {
  return (
    <Aside>
      <Logo>
        <img src={logo} alt='Logo' />
      </Logo>
      <Title>Arquivos</Title>
      <ButtonAddFile><PlusIcon src={plus} alt='plus' /> Adicionar arquivo</ButtonAddFile>
      <List>
        {fileList.map((file) => (
          file.active === true
            ? <File key={file.id}><FileActive file={file} /></File>
            : <FileHover key={file.id}><FileInative file={file} /></FileHover>
        ))}
      </List>
    </Aside>
  )
}

export { Sidebar }
