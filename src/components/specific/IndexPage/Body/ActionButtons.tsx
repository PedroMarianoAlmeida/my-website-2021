import Link from 'next/link'

import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  button: {
    margin: '0 10px',
    width: '150px',
    height: '70px',
  },
})

const ActionButtons = () => {
  const classes = useStyles()

  return (
    <Box display="flex" justifyContent="center">
      <Link href="/portfolio">
        <Button className={classes.button} variant="contained" color="primary">
          Portfolio
        </Button>
      </Link>
      <Link href="/contact">
        <Button className={classes.button} variant="contained" color="primary">
          Contact
        </Button>
      </Link>
    </Box>
  )
}

export default ActionButtons
