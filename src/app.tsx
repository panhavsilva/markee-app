import { v4 } from 'uuid'
import { useState } from 'react'
import styled from 'styled-components/macro'
import { File } from 'resources/files/types'
import { Sidebar } from 'sidebar'
import { Content } from 'content'

type FileArray = File[]
export function App () {
  const fileList: FileArray = [
    {
      id: v4(),
      name: 'Readme.md',
      content: `
        <h1> Text h1</h1>
        ## Text h2 <br />
        ### Text h3 <br />
        #### Text h4 <br />
        ##### Text h5 <br />
        ###### Text h6 <br />
        Lorem ipsum dolor sit amet simet
      `,
      active: false,
      status: 'editing',
    },
    {
      id: v4(),
      name: 'Contributing.md',
      content: '## Text 2',
      active: false,
      status: 'saving',
    },
    {
      id: v4(),
      name: 'License.md',
      content: '### Text 3',
      active: false,
      status: 'saved',
    },
    {
      id: v4(),
      name: 'Links.md',
      content: '#### Text 4',
      active: false,
      status: 'saved',
    },
  ]

  const [files, setFile] = useState<FileArray>(fileList)

  const handleClick = () => {
    const newFile: FileArray = [{
      id: v4(),
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    }]

    setFile(files => files
      .map(file => ({
        ...file,
        active: false,
      }))
      .concat(newFile))
  }

  return (
    <Container>
      <Sidebar fileList={files} handleClick={handleClick} />
      <Content />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 332px 1fr;
  min-height: 100vh;
`
