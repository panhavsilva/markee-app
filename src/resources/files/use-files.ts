import { useRef, useState, useEffect, MouseEvent, ChangeEvent } from 'react'
import localforage from 'localforage'
import { v4 } from 'uuid'
import { File } from 'resources/files/types'

export function useFiles () {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFile] = useState<File[]>([])

  useEffect(() => {
    async function storageInitial () {
      const value = await localforage.getItem<File[]>('files')
      if (value) {
        setFile(value)
      }
    }
    storageInitial()
  }, [])

  useEffect(() => {
    localforage.setItem('files', files)
  }, [files])

  useEffect(() => {
    const selectedFile = files.filter(file => file.active === true)[0]
    if (selectedFile) {
      window.history.pushState(null, '', `/file/${selectedFile.id}`)
    }
  }, [files])

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    function updateStatus () {
      const file = files.find(file => file.active === true)

      if (!file || file.status !== 'editing') {
        return
      }

      timer = setTimeout(() => {
        setFile(files => files.map(file => {
          if (file.active) {
            return {
              ...file,
              status: 'saving',
            }
          }

          return file
        }))

        setTimeout(() => {
          setFile(files => files.map(file => {
            if (file.active) {
              return {
                ...file,
                status: 'saved',
              }
            }

            return file
          }))
        }, 300)
      }, 300)
    }

    updateStatus()

    return () => clearTimeout(timer)
  }, [files])

  const handleCreateFile = () => {
    inputRef.current?.focus()
    const newFile: File[] = [{
      id: v4(),
      name: 'Sem Título',
      content: '',
      active: true,
      status: 'saved',
    }]

    setFile(files => files
      .map(file => ({
        ...file,
        active: false,
      }))
      .concat(newFile))
  }

  const handleDeleteFile = (id: string) => {
    setFile(files => files.filter(file => file.id !== id))
  }

  const handleSelectFile = (fileSelected: File) => (event: MouseEvent) => {
    event.preventDefault()
    setFile(files => files
      .map(file => (file.id === fileSelected.id
        ? { ...file, active: true, status: 'editing' }
        : { ...file, active: false })))
  }

  const handleChangeContent = (id: string) => (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFile(files => files.map(file => {
      if (file.id === id) {
        return { ...file, content: event.target.value, status: 'editing' }
      }
      return file
    }))
  }

  const handleChangeTitle = (id: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setFile(files => files.map(file => {
      if (file.id === id) {
        return {
          ...file,
          name: event.target.value,
          status: 'editing',
        }
      }
      return file
    }))
  }

  return {
    inputRef,
    files,
    setFile,
    handleCreateFile,
    handleDeleteFile,
    handleSelectFile,
    handleChangeContent,
    handleChangeTitle,
  }
}
