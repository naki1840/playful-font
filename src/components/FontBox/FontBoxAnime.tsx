import { FC } from 'react'

import Typography from '@material-ui/core/Typography'
import GoogleFontLoader from 'react-google-font-loader'
import { useFormContext } from 'react-hook-form'

import { TextAnime, AnimeRef } from 'src/components/TextAnime'
import { animeEffects } from 'src/constants/animeEffect'
import { fonts } from 'src/constants/fonts'

import { FormValues } from './type'

type Props = {
  inputRef: AnimeRef
}
export const FontBoxAnime: FC<Props> = ({ inputRef }) => {
  const { watch } = useFormContext<FormValues>()
  const valueWord = watch('word')
  const valueFontIndex = watch('fontIndex')
  const font = fonts[valueFontIndex]
  const valueAnimeIndex = watch('animeIndex')
  const animeEffect = animeEffects[valueAnimeIndex]

  return (
    <>
      <GoogleFontLoader fonts={[font]} subsets={['cyrillic-ext', 'greek']} />
      <Typography
        component="h3"
        variant="h3"
        align="center"
        color="textPrimary"
        style={{ fontFamily: font.font }}
      >
        <TextAnime
          inputRef={inputRef}
          config={animeEffect.config}
          word={valueWord}
          font={font.font}
        />
      </Typography>
    </>
  )
}
