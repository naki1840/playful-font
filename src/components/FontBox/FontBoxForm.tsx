/* eslint-disable react/no-array-index-key */
import { FC, useState } from 'react'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import { Controller, useFormContext } from 'react-hook-form'

import { ButtonReset, ButtonPause, ButtonPlay } from 'src/components/ControlButton'
import { getAnimeControl, AnimeRef } from 'src/components/TextAnime'
import { animeEffects } from 'src/constants/animeEffect'
import { fonts } from 'src/constants/fonts'

import { FormValues } from './type'

const WordTextField: FC = () => {
  const { control } = useFormContext<FormValues>()
  return (
    <Controller
      name="word"
      control={control}
      render={({ field }) => <TextField {...field} label="Word" fullWidth />}
    />
  )
}

const FontSelect: FC = () => {
  const { control } = useFormContext<FormValues>()
  return (
    <Controller
      name="fontIndex"
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField select label="Font" value={value} onChange={onChange} fullWidth>
          {fonts.map((option, index) => (
            <MenuItem key={option.font} value={index}>
              {option.font}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  )
}

const AnimeSelect: FC = () => {
  const { control } = useFormContext<FormValues>()
  return (
    <Controller
      name="animeIndex"
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField select label="Animation" value={value} onChange={onChange} fullWidth>
          {animeEffects.map((option, index) => (
            <MenuItem key={option.name} value={index}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  )
}

type Props = {
  inputRef: AnimeRef
}
export const FontBoxForm: FC<Props> = ({ inputRef }) => {
  const [isPlaying, setIsPlaying] = useState(true)
  const animeControl = getAnimeControl(inputRef)

  const handleReset = () => {
    animeControl.restart()
    setIsPlaying(true)
  }

  const handlePause = () => {
    animeControl.pause()
    setIsPlaying(false)
  }

  const handlePlay = () => {
    animeControl.play()
    setIsPlaying(true)
  }

  return (
    <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
      <Grid item xs={12} sm={12} md={12}>
        <Box textAlign="center">
          <ButtonReset onClick={handleReset} />
          {isPlaying ? <ButtonPause onClick={handlePause} /> : <ButtonPlay onClick={handlePlay} />}
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <WordTextField />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <FontSelect />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <AnimeSelect />
      </Grid>
    </Grid>
  )
}
