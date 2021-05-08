import { useState, useEffect, useRef } from 'react'

import { animeEffects, getRandomAnimeIndex, AnimeEffect } from 'src/constants/animeEffect'

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

  const [animeIndex, setAnimeIndex] = useState<number>(getRandomAnimeIndex())
  const [animeEffect, setAnimeEffect] = useState<AnimeEffect>(animeEffects[animeIndex])
  const handleChangeAnimeIndex = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnimeIndex(parseInt(event.target.value, 10))
  }
  useEffect(() => {
    const newAnimeEffect = animeEffects[animeIndex]
    setAnimeEffect({ ...newAnimeEffect })
  }, [animeIndex])

  return {
    ref,
    restart,
    play,
    pause,
    reverse,
    animeIndex,
    animeEffect,
    handleChangeAnimeIndex,
  }
}
