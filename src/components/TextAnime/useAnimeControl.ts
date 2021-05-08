import { useRef } from 'react'

export type AnimeElement = HTMLElement & {
  restart: () => void
  play: () => void
  pause: () => void
  reverse: () => void
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAnimeControl = () => {
  const ref = useRef<AnimeElement>(null)

  const restart = () => ref.current?.restart()
  const play = () => ref.current?.play()
  const pause = () => ref.current?.pause()
  const reverse = () => ref.current?.reverse()

  return {
    ref,
    restart,
    play,
    pause,
    reverse,
  }
}
