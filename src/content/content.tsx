import marked from 'marked'
import 'highlight.js/styles/github.css'
import { ChangeEvent, RefObject, Dispatch, SetStateAction } from 'react'
import * as S from './content-styled'
import fileBlueIcon from 'ui/icons/file-blue-icon.svg'
import { File } from 'resources/files/types'
import('highlight.js').then(hljs => {
  const highlight = hljs.default
  marked.setOptions({
    highlight: (code, language) => {
      if (language && highlight.getLanguage(language)) {
        return highlight.highlight(code, { language }).value
      }
      return highlight.highlightAuto(code).value
    },
  })
})

type ContentProps = {
  inputRef: RefObject<HTMLInputElement>
  setFile: Dispatch<SetStateAction<File[]>>
  file: File | null
}
export function Content ({ inputRef, setFile, file }: ContentProps) {
  if (file === null) {
    return null
  }
  const id = file.id
  const handleChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFile(files => files.map(file => file.id === id
      ? { ...file, content: event.target.value, status: 'editing' }
      : { ...file }))
  }
  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setFile(files => files.map(file => file.id === id
      ? { ...file, name: event.target.value, status: 'editing' }
      : { ...file }))
  }

  return (
    <S.Main>
      <S.InputDiv>
        <S.FileNameIcon src={fileBlueIcon} alt='File icon' />
        <S.FileNameInput
          value={file.name}
          ref={inputRef}
          onChange={handleChangeTitle}
          autoFocus
        />
      </S.InputDiv>
      <S.Textarea
        value={file.content}
        placeholder='Digite aqui seu markdown'
        onChange={handleChangeContent}
      />
      <S.OutputArticle dangerouslySetInnerHTML={{ __html: marked(file.content) }} />
    </S.Main>
  )
}
