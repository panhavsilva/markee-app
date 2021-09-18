import { File } from 'resources/files/types'
import fileBlueIcon from 'ui/icons/file-blue-icon.svg'
import { Main, Input, FileName, FileNameIcon, Textarea } from './content-styled'
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
      <Textarea placeholder='Digite aqui seu markdown' />
      <Output content={fileList[0].content} />
    </Main>
  )
}

export { Content }
