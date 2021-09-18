export type Status = 'saving' | 'saved' | 'editing'

export type File = {
  id: number
  name: string
  content: string
  active: boolean
  status: Status
}
