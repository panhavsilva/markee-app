import styled, { keyframes } from 'styled-components'
import { Editing, Saving, Saved } from 'ui/icons'
import { Status } from 'resources/files/types'

type StatusIconProps = { status: Status }
export function StatusIconEditing ({ status }: StatusIconProps) {
  const Comp = {
    saving: SavingIcon,
    saved: SavedIcon,
    editing: EditingIcon,
  }[status]
  return <Comp />
}

const EditingIcon = styled(Editing)`
  justify-self: self-end;
  width: 8px;
`

const SavedIcon = styled(Saved)`
  height: 8.25px;
  justify-self: self-end;
  width: 12px;
`

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`

const SavingIcon = styled(Saving)`
  height: 11px;
  justify-self: self-end;
  width: 11px;

  animation: ${rotation} 1s infinite linear;
`
