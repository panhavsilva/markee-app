import styled, { css } from 'styled-components/macro'
import deleteIcon from 'assets/delete-icon.svg'

export const FileIcon = styled.img`
  height: 24px;
  width: 24px;
`

export const FileLink = styled.a`
  align-items: center;
  color: rgba(255, 255, 255, 0.65);
  cursor: context-menu;
  display: grid;
  font-style: normal;
  font-size: 1.6rem;
  font-weight: 400;
  grid-template-columns: 27px 1fr 13px;
  letter-spacing: -0.02em;
  line-height: 21px;
  margin-left: 12px;
  text-decoration: none;
  width: 100%;
`

export const FileLinkActive = styled.a`
  align-items: center;
  color: #FFF;
  cursor: context-menu;
  display: grid;
  font-style: normal;
  font-size: 1.6rem;
  font-weight: 400;
  grid-template-columns: 27px 1fr 13px;
  letter-spacing: -0.02em;
  line-height: 21px;
  margin-left: 12px;
  text-decoration: none;
  width: 100%;
`

export const EditingIcon = styled.img`
  justify-self: center;
  width: 8px;
`

export const SalvedIcon = styled.img`
  height: 8.25px;
  justify-self: center;
  width: 12px;
`

export const SalvingIcon = styled.img`
  height: 11px;
  justify-self: center;
  width: 11px;
`

export const ButtonDelete = styled.button`${({ theme }) => css`
  background-image: url(${deleteIcon});
  background-color: ${theme.colors.black};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  height: 8px;
  opacity: 0;
  width: 8px;
`}`
