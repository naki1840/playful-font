import React, { FC } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'

export const Accordion = withStyles({
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
export const AccordionSummaryWrapper: FC = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.warapper}>{children}</div>
}

export const AccordionSummary = withStyles({
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

export const AccordionDetails = withStyles({
  root: {
    flexDirection: 'column',
  },
})(MuiAccordionDetails)
