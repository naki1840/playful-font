import { useState, useEffect, useRef } from 'react'

export const useStable = (value: string | number): boolean => {
  const ref = useRef<string | number>()
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
