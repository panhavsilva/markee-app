import { Status } from 'resources/files/types'
import fileBlueIcon from 'ui/icons/file-blue-icon.svg'
import { FileIcon, FileLinkActive } from './file-styled'
import { StatusIconEditing } from './status-icon'

type FileActiveProps = { file: { id?: number, name: string, status: Status } }
function FileActive ({ file }: FileActiveProps) {
  return (
    <FileLinkActive href={'/' + file.name}>
      <FileIcon src={fileBlueIcon} alt='File icon' />
      {file.name}
      <StatusIconEditing status={file.status} />
    </FileLinkActive>
  )
}

export { FileActive }
