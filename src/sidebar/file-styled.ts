import styled, { css } from 'styled-components/macro'
import deleteIcon from 'assets/delete-icon.svg'

export const FileIcon = styled.img`
  height: 24px;
  width: 24px;
`

export const FileTitle = styled.p`
  cursor: context-menu;
  font-style: normal;
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 21px;
  margin-left: 12px;
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
