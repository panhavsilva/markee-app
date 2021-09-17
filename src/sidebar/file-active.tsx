import {
  FileIcon, FileTitle, EditingIcon, SalvedIcon, SalvingIcon,
} from './file-styled'
import fileBlueIcon from 'assets/file-blue-icon.svg'
import editingIcon from 'assets/editing-icon.svg'
import savingIcon from 'assets/saving-icon.svg'
import savedIcon from 'assets/saved-icon.svg'

type FileActiveProps = {
  file: {
    id?: number
    name: string
    content?: string
    active?: boolean
    status: 'editing' | 'saving' | 'salved'
  }
}
function FileActive ({ file }: FileActiveProps) {
  return (
    <>
      <FileIcon src={fileBlueIcon} alt='file icon' />
      <FileTitle>{file.name}</FileTitle>
      {file.status === 'editing' && <EditingIcon src={editingIcon} alt='status icon' />}
      {file.status === 'saving' && <SalvingIcon src={savingIcon} alt='status icon' />}
      {file.status === 'salved' && <SalvedIcon src={savedIcon} alt='status icon' />}
    </>
  )
}

export { FileActive }
