import marked from 'marked'
import 'highlight.js/styles/github.css'
import { useState, useEffect, ChangeEvent, RefObject } from 'react'
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
}
export function Content ({ inputRef }: ContentProps) {
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('Sem Título')

  useEffect(() => {

  }, [title])

  const handleChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    return setContent(event.target.value)
  }
  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
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
