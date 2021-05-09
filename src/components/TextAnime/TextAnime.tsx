import { FC } from 'react'

import Anime from 'react-animejs-wrapper'

import { AnimeRef } from './type'
import { useStable } from './useStable'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnimePropsConfig = any
type Props = {
  inputRef: AnimeRef
  config: AnimePropsConfig
  word: string
  font: string
  cascade?: boolean
}

export const TextAnime: FC<Props> = ({ inputRef, config, word, font, cascade = true }) => {
  const isStable = useStable(font)

  if (!config) return null

  const newWord = isStable && word ? word : ' '
  /* eslint-disable react/no-array-index-key */
  const dispWord = cascade
    ? newWord
        .split('')
        .map((el) => (el === ' ' ? '\u00A0' : el))
        .map((el, index) => <div key={index}>{el}</div>)
    : newWord
  /* eslint-enable react/no-array-index-key */

  return (
    <Anime
      ref={inputRef}
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
}
