import Grid from '@material-ui/core/Grid'

import HeroSection from './HeroSection'

const BodySctructure = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <HeroSection />
      </Grid>
    </Grid>
  )
}

export default BodySctructure
