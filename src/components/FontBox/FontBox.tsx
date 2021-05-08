/* eslint-disable react/no-array-index-key */
import { FC } from 'react'

import MenuItem from '@material-ui/core/MenuItem'
import { Theme, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
import { useForm, FormProvider, Controller, useFormContext } from 'react-hook-form'

import { ButtonReset, ButtonPause, ButtonPlay } from 'src/components/ControlButton'
import { FontBoxAccordion } from 'src/components/FontBox/FontBoxAccordion'
import { useAnimeControl } from 'src/components/TextAnime'
import { animeEffects, getRandomAnimeIndex } from 'src/constants/animeEffect'
import { fonts, getRandomFontIndex } from 'src/constants/fonts'
import { getRandomWord } from 'src/constants/words'

import { FontBoxAnime } from './FontBoxAnime'
import { FormValues } from './type'

const bgList = ['#faf3dd', '#b8f2e6', '#ffa69e', '#aed9e0', '#5e6472']
type StyleProps = {
  index: number
}
const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  bg: (props) => ({ backgroundColor: bgList[props.index % bgList.length] }),
  main: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    overflow: 'hidden',
  },
}))

const WordTextField: FC = () => {
  const { control } = useFormContext<FormValues>()
  return (
    <Controller
      name="word"
      control={control}
      render={({ field }) => <TextField {...field} label="Word" />}
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
        <TextField select label="Font" value={value} onChange={onChange}>
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
        <TextField select label="Animation" value={value} onChange={onChange}>
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
  index: number
}
export const FontBox: FC<Props> = ({ index }) => {
  const classes = useStyles({ index })
  const methods = useForm<FormValues>({
    defaultValues: {
      word: getRandomWord(),
      fontIndex: getRandomFontIndex(),
      animeIndex: getRandomAnimeIndex(),
    },
  })

  const animeControl = useAnimeControl()

  return (
    <FormProvider {...methods}>
      <div className={clsx(classes.main, classes.bg)}>
        <FontBoxAnime inputRef={animeControl.ref} />
      </div>

      <FontBoxAccordion>
        <div>
          <Typography>Animation Control</Typography>
          <ButtonReset onClick={animeControl.restart} />
          <ButtonPause onClick={animeControl.pause} />
          <ButtonPlay onClick={animeControl.play} />
        </div>
        <div>
          <Typography>Word Setting</Typography>
          <WordTextField />
          <FontSelect />
          <AnimeSelect />
        </div>
      </FontBoxAccordion>
    </FormProvider>
  )
}
