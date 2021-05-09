import React, { FC } from 'react'

import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import PauseIcon from '@material-ui/icons/Pause'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import RotateLeftIcon from '@material-ui/icons/RotateLeft'

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
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
