import styled, { css } from 'styled-components/macro'
import { File } from 'resources/files/types'
import { Input } from './input'
import { Output } from './output'

type FileList = { fileList: File[] }
function Content ({ fileList }: FileList) {
  return (
    <Main>
      <Input />
      <Output content={fileList[0].content} />
    </Main>
  )
}

const Main = styled.main`${({ theme }) => css`
  background: ${theme.colors.white};
  display: grid;
  grid-template-columns: 1fr 1fr;
`}`

export { Content }
