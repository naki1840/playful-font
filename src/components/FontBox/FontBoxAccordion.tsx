import { FC } from 'react'

import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const Accordion = withStyles({
  root: {
    border: 'none',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion)

const useStyles = makeStyles(() => ({
  warapper: {
    position: 'relative',
    height: '10px',
  },
}))
const AccordionSummaryWrapper: FC = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.warapper}>{children}</div>
}

const AccordionSummary = withStyles({
  root: {
    width: '100px',
    backgroundColor: 'rgba(255,255,255,1.0)',
    position: 'absolute',
    bottom: '0px',
    borderRadius: '6px',
    '&$expanded': {
      minHeight: '20px',
    },
  },
  content: {
    '&$expanded': {
      margin: '15px 0;',
    },
  },
  expanded: {},
})(MuiAccordionSummary)

const AccordionDetails = withStyles({
  root: {
    flexDirection: 'column',
  },
})(MuiAccordionDetails)

export const FontBoxAccordion: FC = ({ children }) => (
  <Accordion>
    <AccordionSummaryWrapper>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
        <Typography>setting</Typography>
      </AccordionSummary>
    </AccordionSummaryWrapper>
    <AccordionDetails>{children}</AccordionDetails>
  </Accordion>
)
