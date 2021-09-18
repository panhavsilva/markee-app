import styled, { css } from 'styled-components/macro'
import { File } from 'resources/files/types'
import fileBlueIcon from 'ui/icons/file-blue-icon.svg'
import { Input, FileName, FileNameIcon } from './input/file-styled'
import { Textarea } from './input/textarea'
import { Output } from './output'

type FileList = { fileList: File[] }
function Content ({ fileList }: FileList) {
  return (
    <Main>
      <Input>
        <FileNameIcon src={fileBlueIcon} alt='File icon' />
        <FileName
          type='text'
          defaultValue='Sem título'
          autoFocus
        />
      </Input>
      <Textarea />
      <Output content={fileList[0].content} />
    </Main>
  )
}

const Main = styled.main`${({ theme }) => css`
  background: ${theme.colors.white};
  display: grid;
  grid-template-areas: "head head" "textarea output";
  grid-template-rows: 89px 1fr;
`}`

export { Content }
