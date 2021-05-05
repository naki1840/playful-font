import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import RotateLeftIcon from '@material-ui/icons/RotateLeft'
import PauseIcon from '@material-ui/icons/Pause'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}))

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
export const ButtonReset: FC<Props> = ({ onClick }) => {
  const classes = useStyles()

  return (
    <Button
      variant="outlined"
      color="primary"
      className={classes.button}
      startIcon={<RotateLeftIcon />}
      onClick={onClick}
    >
      Reset
    </Button>
  )
}

export const ButtonPause: FC<Props> = ({ onClick }) => {
  const classes = useStyles()

  return (
    <Button
      variant="outlined"
      color="primary"
      className={classes.button}
      startIcon={<PauseIcon />}
      onClick={onClick}
    >
      Pause
    </Button>
  )
}

export const ButtonPlay: FC<Props> = ({ onClick }) => {
  const classes = useStyles()

  return (
    <Button
      variant="outlined"
      color="primary"
      className={classes.button}
      startIcon={<PlayArrowIcon />}
      onClick={onClick}
    >
      Play
    </Button>
  )
}
