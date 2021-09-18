type FileProps = {
  id: number
  name: string
  content: string
  active: boolean
  status: 'editing' | 'saving' | 'salved'
}

export type FileList = {
  fileList: FileProps[]
}

export type FileArray = FileProps[]

export type FileActiveProps = {
  file: {
    id?: number
    name: string
    content?: string
    active?: boolean
    status: 'editing' | 'saving' | 'salved'
  }
}

export type FileInativeProps = {
  file: {
    id?: number
    name: string
    content?: string
    active?: boolean
    status?: 'editing' | 'saving' | 'salved'
  }
}
