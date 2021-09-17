import { FileInativeProps } from 'types/types'
import { FileIcon, FileTitle, ButtonDelete } from './file-styled'
import fileWhiteIcon from 'assets/file-white-icon.svg'

function FileInative ({ file }: FileInativeProps) {
  return (
    <>
      <FileIcon src={fileWhiteIcon} alt='file icon' />
      <FileTitle>{file.name}</FileTitle>
      <ButtonDelete />
    </>
  )
}

export { FileInative }
