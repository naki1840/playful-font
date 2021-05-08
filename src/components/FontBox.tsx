/* eslint-disable react/no-array-index-key */
import React, { FC, useEffect, useState } from 'react'

import MenuItem from '@material-ui/core/MenuItem'
import { Theme, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import clsx from 'clsx'
import GoogleFontLoader, { Font } from 'react-google-font-loader'

import {
  Accordion,
  AccordionSummaryWrapper,
  AccordionSummary,
  AccordionDetails,
} from 'src/components/Accordion'
import { ButtonReset, ButtonPause, ButtonPlay } from 'src/components/ControlButton'
import { TextAnime, useAnimeControl } from 'src/components/TextAnime'
import { fonts, getRandomFontIndex } from 'src/constants/fonts'
import { getRandomWord } from 'src/constants/words'

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

  const animeControl = useAnimeControl()

  const [fontIndex, setFontIndex] = React.useState<number>(getRandomFontIndex())
  const [font, setFont] = useState<Font[]>([])
  const handleChangeFontIndex = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFontIndex(parseInt(event.target.value, 10))
  }
  useEffect(() => {
    const newFont = fonts[fontIndex]
    setFont([newFont])
  }, [fontIndex])

  const [word, setWord] = useState<string>(getRandomWord())
  const handleChangeWord = (event: React.ChangeEvent<HTMLInputElement>) =>
    setWord(event.target.value)

  return (
    <>
      <GoogleFontLoader fonts={font} subsets={['cyrillic-ext', 'greek']} />
      <div className={clsx(classes.main, classes.bg)}>
        <Typography
          component="h3"
          variant="h3"
          align="center"
          color="textPrimary"
          style={{ fontFamily: font[0]?.font }}
        >
          <TextAnime
            ref={animeControl.ref}
            config={animeControl.animeEffect.config}
            word={word}
            font={font[0]?.font}
          />
        </Typography>
      </div>
      <Accordion>
        <AccordionSummaryWrapper>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id={`panel1a-header-${index}`}
          >
            <Typography>setting</Typography>
          </AccordionSummary>
        </AccordionSummaryWrapper>
        <AccordionDetails>
          <div>
            <Typography>Animation Control</Typography>
            <ButtonReset onClick={animeControl.restart} />
            <ButtonPause onClick={animeControl.pause} />
            <ButtonPlay onClick={animeControl.play} />
          </div>
          <div>
            <Typography>Word Setting</Typography>
            <TextField id="standard-basic" label="Word" value={word} onChange={handleChangeWord} />
            <TextField
              id="standard-select-font"
              select
              label="Select"
              value={fontIndex}
              onChange={handleChangeFontIndex}
              helperText="Please select your font"
            >
              {fonts.map((option, mapIndex) => (
                <MenuItem key={mapIndex} value={mapIndex}>
                  {option.font}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  )
}
