import { FileActiveProps } from 'types/types'
import {
  FileIcon, EditingIcon, SalvedIcon, SalvingIcon, FileLinkActive,
} from './file-styled'
import fileBlueIcon from 'assets/file-blue-icon.svg'
import editingIcon from 'assets/editing-icon.svg'
import savingIcon from 'assets/saving-icon.svg'
import savedIcon from 'assets/saved-icon.svg'

function FileActive ({ file }: FileActiveProps) {
  return (
    <FileLinkActive href={'/' + file.name}>
      <FileIcon src={fileBlueIcon} alt='File icon' />
      {file.name}
      {file.status === 'editing' && <EditingIcon src={editingIcon} alt='Editing icon' />}
      {file.status === 'saving' && <SalvingIcon src={savingIcon} alt='Saving icon' />}
      {file.status === 'salved' && <SalvedIcon src={savedIcon} alt='Saved icon' />}
    </FileLinkActive>
  )
}

export { FileActive }
