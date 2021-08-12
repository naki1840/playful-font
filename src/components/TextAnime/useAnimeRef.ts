import { useRef } from 'react'

import { AnimeElement, AnimeRef } from './type'

export const useAnimeRef = (): AnimeRef => {
  const ref = useRef<AnimeElement>(null)
  return ref
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getAnimeControl = (inputRef: AnimeRef) => {
  const restart = () => inputRef.current?.restart()
  const play = () => inputRef.current?.play()
  const pause = () => inputRef.current?.pause()
  const reverse = () => inputRef.current?.reverse()

  return {
    restart,
    play,
    pause,
    reverse,
  }
}
