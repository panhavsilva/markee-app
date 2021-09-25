import marked from 'marked'
import 'highlight.js/styles/github.css'
import { ChangeEvent, RefObject } from 'react'
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
  file: File | null,
  handleChangeContent: (id: string) => (event: ChangeEvent<HTMLTextAreaElement>) => void
  handleChangeTitle: (id: string) => (event: ChangeEvent<HTMLInputElement>) => void
}
export function Content (props: ContentProps) {
  const { inputRef, handleChangeTitle, file, handleChangeContent } = props
  if (file === null) {
    return null
  }

  return (
    <S.Main>
      <S.InputDiv>
        <S.FileNameIcon src={fileBlueIcon} alt='File icon' />
        <S.FileNameInput
          value={file.name}
          ref={inputRef}
          onChange={handleChangeTitle(file.id)}
          autoFocus
        />
      </S.InputDiv>
      <S.Textarea
        value={file.content}
        placeholder='Digite aqui seu markdown'
        onChange={handleChangeContent(file.id)}
      />
      <S.OutputArticle dangerouslySetInnerHTML={{ __html: marked(file.content) }} />
    </S.Main>
  )
}
