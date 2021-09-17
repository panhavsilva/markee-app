import { FileArray } from 'types/types'
import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'
import { Content } from 'content'

function App () {
  const fileList: FileArray = [
    {
      id: 1,
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
      active: true,
      status: 'editing',
    },
    {
      id: 2,
      name: 'Contributing.md',
      content: '## Text 2',
      active: true,
      status: 'saving',
    },
    {
      id: 3,
      name: 'License.md',
      content: '### Text 3',
      active: true,
      status: 'salved',
    },
    {
      id: 4,
      name: 'Links.md',
      content: '#### Text 4',
      active: false,
      status: 'salved',
    },
  ]

  return (
    <Container>
      <Sidebar fileList={fileList} />
      <Content fileList={fileList} />
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 332px 1fr;
  min-height: 100vh;
`

export { App }
