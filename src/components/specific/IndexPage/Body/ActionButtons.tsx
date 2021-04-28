import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

const ActionButtons = () => {
  return (
    <Grid item xs={12}>
      <Box display="flex" justifyContent="space-around">
        <Button variant="outlined" color="primary" size="large">
          Portfolio
        </Button>

        <Button variant="outlined" color="primary" size="large">
          Contact
        </Button>
      </Box>
    </Grid>
  )
}

export default ActionButtons
