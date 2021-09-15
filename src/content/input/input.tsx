import { Textarea } from './textarea'
import { File, FileName } from './file'
import file from 'assets/file-blue-icon.svg'

function Input () {
  return (
    <div>
      <File>
        <img src={file} alt='icon' />
        <FileName
          type='text'
          name='fileName'
          value='Sem título'
          autoFocus
        />
      </File>
      <Textarea
        value='## Bootcamp Brain Co.'
      />
    </div>
  )
}

export { Input }
