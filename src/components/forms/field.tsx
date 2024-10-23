import { createContext, type HTMLAttributes, useContext, useState } from 'react'

export type FieldProps = HTMLAttributes<HTMLDivElement>

type FileInputContextProps = {
  files: File[]
  onFileSelected: (files: File[]) => void
}

const FileInputContext = createContext({} as FileInputContextProps)

export function Field(props: FieldProps) {
  const [files, setFiles] = useState<File[]>([])

  return (
    <FileInputContext.Provider value={{ files, onFileSelected: setFiles }}>
      <div
        className='flex w-full items-center gap-2 rounded-lg border border-blue-950 px-3 py-2 shadow-sm focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-200'
        {...props}
      />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
