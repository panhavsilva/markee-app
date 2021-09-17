import { FileIcon, FileTitle, ButtonDelete } from './file-styled'
import fileWhiteIcon from 'assets/file-white-icon.svg'

type FileInativeProps = {
  file: {
    id?: number
    name: string
    content?: string
    active?: boolean
    status?: 'editing' | 'saving' | 'salved'
  }
}
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
