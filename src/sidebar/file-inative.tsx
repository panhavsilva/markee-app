import styled, { css } from 'styled-components/macro'
import deleteIcon from 'ui/icons/delete-icon.svg'
import { FileLink, FileIcon } from './file-styled'
import fileWhiteIcon from 'ui/icons/file-white-icon.svg'

type FileInativeProps = { file: { id: string, name: string } }
function FileInative ({ file }: FileInativeProps) {
  return (
    <FileLink href={`/file/${file.id}`}>
      <FileIcon src={fileWhiteIcon} alt='File icon' />
      {file.name}
      <ButtonDelete />
    </FileLink>
  )
}

const ButtonDelete = styled.button`${({ theme }) => css`
  background-image: url(${deleteIcon});
  background-color: ${theme.colors.black};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  height: 8px;
  opacity: 0;
  width: 8px;
`}`

export { FileInative }
