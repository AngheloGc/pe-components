import { useRef } from 'react'

export const useUniqueId = () => {
  const id = useRef(`UUID-${Math.random().toString(36).substring(2, 9)}`)
  return id.current
}