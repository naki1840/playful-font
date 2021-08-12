import { FC } from 'react'

import Box from '@material-ui/core/Box'
import { Theme, makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
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
    overflow: 'hidden',
  },
}))

const usePadding = () => {
  const isWidth376Over = useMediaQuery('(min-width:376px)')
  const isWidth321Over = useMediaQuery('(min-width:321px)')

  if (isWidth376Over) return { pt: 8, pb: 8 }
  if (isWidth321Over) return { pt: 7, pb: 7 }
  return { pt: 6, pb: 7 }
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

  const animeRef = useAnimeRef()
  const { pt, pb } = usePadding()

  return (
    <FormProvider {...methods}>
      <Box pt={pt} pb={pb} className={clsx(classes.main, classes.bg)}>
        <FontBoxAnime inputRef={animeRef} />
      </Box>

      <FontBoxAccordion>
        <FontBoxForm inputRef={animeRef} />
      </FontBoxAccordion>
    </FormProvider>
  )
}
