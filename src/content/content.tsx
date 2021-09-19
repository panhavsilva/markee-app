import marked from 'marked'
import 'highlight.js/styles/github.css'
import { useState, ChangeEvent, RefObject, Dispatch, SetStateAction } from 'react'
import {
  Main, InputDiv, FileNameInput, FileNameIcon, Textarea, OutputArticle,
} from './content-styled'
import fileBlueIcon from 'ui/icons/file-blue-icon.svg'
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
  setTitleFile: Dispatch<SetStateAction<string>>
}
export function Content ({ inputRef, setTitleFile }: ContentProps) {
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('Sem Título')

  const handleChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    return setContent(event.target.value)
  }
  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
    setTitleFile(event.target.value)
  }

  return (
    <Main>
      <InputDiv>
        <FileNameIcon src={fileBlueIcon} alt='File icon' />
        <FileNameInput
          key='inputFileName'
          value={title}
          autoFocus
          ref={inputRef}
          onChange={handleChangeTitle}
        />
      </InputDiv>
      <Textarea
        placeholder='Digite aqui seu markdown'
        value={content}
        onChange={handleChangeContent}
      />
      <OutputArticle dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </Main>
  )
}
