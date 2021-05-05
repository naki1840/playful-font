import React, { forwardRef } from 'react'
import Anime from 'react-animejs-wrapper'
import { AnimeElement } from './animeControlHook'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnimePropsConfig = any
type Props = {
  config: AnimePropsConfig
  word: string
  cascade?: boolean
}
// eslint-disable-next-line prefer-arrow-callback
export const TextAnime = forwardRef<AnimeElement, Props>(function TextAnime(
  { config, word, cascade = true },
  ref
) {
  if (!word || !config) return null

  /* eslint-disable react/no-array-index-key */
  const dispWord = cascade
    ? word
        .split('')
        .map((el) => (el === ' ' ? '\u00A0' : el))
        .map((el, index) => <div key={index}>{el}</div>)
    : word
  /* eslint-enable react/no-array-index-key */

  return (
    <Anime
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
      config={config}
    >
      {dispWord}
    </Anime>
  )
})
