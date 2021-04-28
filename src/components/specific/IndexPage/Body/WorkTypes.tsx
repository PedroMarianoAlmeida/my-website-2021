import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const WorkTypes = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography align="center" variant="h3">
          I worked with
        </Typography>
      </Grid>

      <Grid item xs={12} md={4}>
        <Typography align="center" variant="h4">
          Open Source
        </Typography>
      </Grid>

      <Grid item xs={12} md={4}>
        <Typography align="center" variant="h4">
          Commercial
        </Typography>
      </Grid>

      <Grid item xs={12} md={4}>
        <Typography align="center" variant="h4">
          Freelancer
        </Typography>
      </Grid>
    </>
  )
}

export default WorkTypes
