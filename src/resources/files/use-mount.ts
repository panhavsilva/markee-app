import { useEffect, Dispatch, SetStateAction } from 'react'
import localforage from 'localforage'
import { File } from 'resources/files/types'

export function useMount (setFile: Dispatch<SetStateAction<File[]>>) {
  useEffect(() => {
    async function storageInitial () {
      const value = await localforage.getItem<File[]>('files')
      if (value) {
        setFile(value)
      }
    }
    storageInitial()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
