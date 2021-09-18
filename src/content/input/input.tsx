import fileBlueIcon from 'ui/icons/file-blue-icon.svg'
import { Textarea } from './textarea-styled'
import { File, FileName } from './file-styled'

function Input () {
  return (
    <div>
      <File>
        <img src={fileBlueIcon} alt='File icon' />
        <FileName
          type='text'
          name='fileName'
          placeholder='Sem título'
          autoFocus
        />
      </File>
      <Textarea
        placeholder='## Bootcamp Brain Co.'
      />
    </div>
  )
}

export { Input }
