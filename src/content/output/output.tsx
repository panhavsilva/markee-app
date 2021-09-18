import styled, { css } from 'styled-components'

export type ContentOutput = { content: string }
function Output ({ content }: ContentOutput) {
  const markdownParser = content

  return (
    <OutputArticle dangerouslySetInnerHTML={{ __html: markdownParser }} />
  )
}

const OutputArticle = styled.article`${({ theme }) => css`
  background: ${theme.colors.white};
  border: none;
  color: rgba(30, 41, 59, 0.7);
  display: block;
  font-size: 1.8rem;
  font-weight: normal;
  grid-area: output,
  min-height: 80vh;
  line-height: 23px;
  padding: 0px 32px;
  width: 100%;

  h1, h2, h3, h4, h5, h6 {
    color: ${theme.colors.black};
    font-style: normal;
    font-weight: bold;
    line-height: 41.66px;
    margin: 0 0 3px 0;
  }

  h1 {
    font-size: 32px;
  }
`}`

export { Output }
