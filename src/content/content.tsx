import marked from 'marked'
import 'highlight.js/styles/github.css'
import {
  useState, ChangeEvent, RefObject, Dispatch, SetStateAction,
} from 'react'
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
  file: File
}
export function Content ({ inputRef, setFile, file }: ContentProps) {
  const [content, setContent] = useState(file.content)
  const title = file.name
  const textareaContent = file.content

  const handleChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value)
    setFile(files => files.map(file => file.active === true
      ? { ...file, content: event.target.value }
      : { ...file }))
  }
  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setFile(files => files.map(file => file.active === true
      ? { ...file, name: event.target.value }
      : { ...file }))
  }

  return (
    <S.Main>
      <S.InputDiv>
        <S.FileNameIcon src={fileBlueIcon} alt='File icon' />
        <S.FileNameInput
          value={title}
          autoFocus
          ref={inputRef}
          onChange={handleChangeTitle}
        />
      </S.InputDiv>
      <S.Textarea
        value={textareaContent}
        placeholder='Digite aqui seu markdown'
        onChange={handleChangeContent}
      />
      <S.OutputArticle dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </S.Main>
  )
}
