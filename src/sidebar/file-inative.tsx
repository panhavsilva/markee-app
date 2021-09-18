import { FileInativeProps } from 'types/types'
import { FileLink, FileIcon, ButtonDelete } from './file-styled'
import fileWhiteIcon from 'assets/file-white-icon.svg'

function FileInative ({ file }: FileInativeProps) {
  return (
    <FileLink href={'/' + file.name}>
      <FileIcon src={fileWhiteIcon} alt='File icon' />
      {file.name}
      <ButtonDelete />
    </FileLink>
  )
}

export { FileInative }
