import { v4 } from 'uuid'
import localforage from 'localforage'
import { useRef, useState, useEffect, MouseEvent, ChangeEvent } from 'react'
import { File } from 'resources/files/types'

export function useFiles () {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFile] = useState<File[]>([])
  const [activeFile, setActiveFile] = useState<File | null>(null)

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
    let timer: ReturnType<typeof setTimeout>

    if (files.length > 0) {
      const fileActive = files.filter(file => file.active === true)[0]
      setActiveFile(fileActive)
    }

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

  const handleDeleteFile = (event: MouseEvent, id: string) => {
    event.preventDefault()
    setFile(files => files.filter(file => file.id !== id))
  }

  const handleSelectFile = (event: MouseEvent, fileSelected: File) => {
    event.preventDefault()
    setFile(files => files
      .map(file => (file.id === fileSelected.id
        ? { ...file, active: true, status: 'editing' }
        : { ...file, active: false })))
    window.history.pushState(null, '', `/file/${fileSelected.id}`)
  }

  const handleChangeContent = (event: ChangeEvent<HTMLTextAreaElement>, id: string) => {
    setFile(files => files.map(file => file.id === id
      ? { ...file, content: event.target.value, status: 'editing' }
      : { ...file }))
  }

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>, id: string) => {
    setFile(files => files.map(file => file.id === id
      ? { ...file, name: event.target.value, status: 'editing' }
      : { ...file }))
  }

  return {
    inputRef,
    files,
    setFile,
    activeFile,
    handleCreateFile,
    handleDeleteFile,
    handleSelectFile,
    handleChangeContent,
    handleChangeTitle,
  }
}
