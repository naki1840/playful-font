import { FC } from 'react'

import { Theme, makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { useForm, FormProvider } from 'react-hook-form'

import { useAnimeRef } from 'src/components/TextAnime'
import { getRandomAnimeIndex } from 'src/constants/animeEffect'
import { getRandomFontIndex } from 'src/constants/fonts'
import { getRandomWord } from 'src/constants/words'

import { FontBoxAccordion } from './FontBoxAccordion'
import { FontBoxAnime } from './FontBoxAnime'
import { FontBoxForm } from './FontBoxForm'
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

  const animeRef = useAnimeRef()

  return (
    <FormProvider {...methods}>
      <div className={clsx(classes.main, classes.bg)}>
        <FontBoxAnime inputRef={animeRef} />
      </div>

      <FontBoxAccordion>
        <FontBoxForm inputRef={animeRef} />
      </FontBoxAccordion>
    </FormProvider>
  )
}
