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
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        size="large"
      >
        Portfolio
      </Button>

      <Button className={classes.button} variant="contained" color="primary">
        Contact
      </Button>
    </Box>
  )
}

export default ActionButtons
