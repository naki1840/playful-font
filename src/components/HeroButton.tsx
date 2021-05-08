import React, { FC } from 'react'

import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import FontDownloadRoundedIcon from '@material-ui/icons/FontDownloadRounded'
import GitHubIcon from '@material-ui/icons/GitHub'
import RefreshRoundedIcon from '@material-ui/icons/RefreshRounded'

type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const ColorButtonGithub = withStyles(() => ({
  root: {
    color: '#444444',
    backgroundColor: '#B8F2E6',
    '&:hover': {
      backgroundColor: '#98ECDB',
    },
  },
}))(Button)
export const ButtonGithub: FC<Props> = ({ onClick }) => (
  <ColorButtonGithub
    variant="contained"
    color="primary"
    startIcon={<GitHubIcon />}
    onClick={onClick}
    href="https://github.com/naki1840"
  >
    GitHub
  </ColorButtonGithub>
)

const ColorButtonRefresh = withStyles(() => ({
  root: {
    color: '#444444',
    backgroundColor: '#FFA69E',
    '&:hover': {
      backgroundColor: '#FF8F85',
    },
  },
}))(Button)
export const ButtonRefresh: FC<Props> = () => (
  <ColorButtonRefresh
    variant="contained"
    color="primary"
    startIcon={<RefreshRoundedIcon />}
    onClick={() => document.location.reload()}
  >
    再読み込み
  </ColorButtonRefresh>
)

const ColorButtonFont = withStyles(() => ({
  root: {
    color: '#444444',
    backgroundColor: '#AED9E0',
    '&:hover': {
      backgroundColor: '#97CFD8',
    },
  },
}))(Button)
export const ButtonFont: FC<Props> = ({ onClick }) => (
  <ColorButtonFont
    variant="contained"
    color="primary"
    startIcon={<FontDownloadRoundedIcon />}
    onClick={onClick}
    href="https://fonts.google.com/"
  >
    Font
  </ColorButtonFont>
)
