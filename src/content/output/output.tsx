import styled, { css } from 'styled-components'
type Content = {
  content: string
}

function Output ({ content }: Content) {
  const markdownParser = content

  return (
    <OutputDiv dangerouslySetInnerHTML={{ __html: markdownParser }} />
  )
}

const OutputDiv = styled.div`${({ theme }) => css`
  background: ${theme.colors.white};
  border: none;
  color: rgba(30, 41, 59, 0.7);
  display: block;
  font-size: 1.8rem;
  font-weight: normal;
  min-height: 80vh;
  line-height: 23px;
  margin-top: 50px;
  padding: 0px 32px;
  width: 100%;

  h1 {
    color: ${theme.colors.black};
    font-size: 32px;
    font-style: normal;
    font-weight: bold;
    line-height: 41.66px;
    margin: 0 0 3px 0;
  }
`}`

export { Output }
