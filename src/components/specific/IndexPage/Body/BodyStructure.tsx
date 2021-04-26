import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import HeroSection from './HeroSection'

const BodyStructure = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <HeroSection />
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={2} alignItems="center">
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

          <Grid item xs={12} md={6}>
            <Button variant="outlined" color="primary" size="large">
              Portfolio
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Button variant="outlined" color="primary" size="large">
              Contact
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default BodyStructure
