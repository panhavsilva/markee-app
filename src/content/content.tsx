import {
  Main, Input, FileName, FileNameIcon, Textarea, OutputArticle,
} from './content-styled'
import fileBlueIcon from 'ui/icons/file-blue-icon.svg'
import { useState, ChangeEvent } from 'react'
import marked from 'marked'
import 'highlight.js/styles/github.css'
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

function Content () {
  const [content, setContent] = useState('')
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    return setContent(event.target.value)
  }

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
      <Textarea
        placeholder='Digite aqui seu markdown'
        value={content}
        onChange={handleChange}
      />
      <OutputArticle dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </Main>
  )
}

export { Content }
