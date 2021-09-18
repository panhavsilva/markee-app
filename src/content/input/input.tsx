import { Textarea } from './textarea-styled'
import { File, FileName } from './file-styled'
import fileBlueIcon from 'assets/file-blue-icon.svg'

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
