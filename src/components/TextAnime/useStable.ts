import { useState, useEffect, useRef } from 'react'

export const useStable = <T>(value: T): boolean => {
  const ref = useRef<T>()
  const [isStable, setIsStable] = useState<boolean>(false)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (ref.current !== value) {
      setIsStable(false)
      timer = setTimeout(() => setIsStable(true), 500)
    }
    ref.current = value
    return () => clearTimeout(timer)
  }, [value])

  return isStable
}
