import { FC } from 'react'

import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { FontBox } from 'src/components/FontBox'
import { ButtonRefresh, ButtonGithub, ButtonFont } from 'src/components/HeroButton'
import { TitleFont } from 'src/components/TitleFont'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}))

const list = [1, 2, 3]

export const App: FC = () => {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <TitleFont>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                style={{ fontFamily: 'inherit' }}
                gutterBottom
              >
                Playful Font
              </Typography>
            </TitleFont>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Playful
              Fontは文字のアニメーションで遊べるサイトです。フォントや文字を自由にカスタマイズできます。
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <ButtonRefresh />
                </Grid>
                <Grid item>
                  <ButtonGithub />
                </Grid>
                <Grid item>
                  <ButtonFont />
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        {list.map((item, index) => (
          <FontBox key={item} index={index} />
        ))}

        <Container maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={1} />
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Created by{' '}
          <Link color="inherit" href="https://github.com/naki1840">
            naki1840
          </Link>
        </Typography>
      </footer>
      {/* End footer */}
    </>
  )
}
